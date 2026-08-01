<#
.SYNOPSIS
    Resize and compress camera originals for the web.

.DESCRIPTION
    Camera files run 25-30 MB each, which is far too heavy to commit or serve.
    This downscales to a 2400px long edge at JPEG quality 82 - roughly 500 KB -
    and writes them out as 01.jpg, 02.jpg, … into public/work/<slug>/.

    next/image handles responsive sizing and AVIF/WebP conversion from there,
    so 2400px is the master the optimizer crops down from.

.EXAMPLE
    ./scripts/optimize-images.ps1 -Source "D:\shoots\amina" -Slug "amina-portraits"

.EXAMPLE
    # Straight into public/home instead of a project folder
    ./scripts/optimize-images.ps1 -Source "D:\hero" -Destination "public/home"
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$Source,

    # Project slug - output goes to public/work/<slug>/
    [string]$Slug,

    # Explicit output directory; overrides -Slug
    [string]$Destination,

    [int]$MaxEdge = 2400,

    [ValidateRange(1, 100)]
    [int]$Quality = 82
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $Source)) { throw "Source not found: $Source" }

$repoRoot = Split-Path $PSScriptRoot -Parent

if ($Destination) {
    $outDir = if ([System.IO.Path]::IsPathRooted($Destination)) { $Destination } else { Join-Path $repoRoot $Destination }
} elseif ($Slug) {
    $outDir = Join-Path $repoRoot "public\work\$Slug"
} else {
    throw "Pass either -Slug or -Destination."
}

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$Quality)

$files = Get-ChildItem -File -Path $Source -Include *.jpg, *.jpeg, *.JPG, *.JPEG, *.png -Recurse:$false -ErrorAction SilentlyContinue
if (-not $files) { $files = Get-ChildItem -File -Path (Join-Path $Source '*') -Include *.jpg, *.jpeg, *.JPG, *.JPEG, *.png }
$files = $files | Sort-Object Name

if (-not $files) { throw "No images found in $Source" }

New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Write-Host "→ $outDir  ($($files.Count) images)" -ForegroundColor Cyan

$i = 0
$totalIn = 0
$totalOut = 0

foreach ($f in $files) {
    $i++
    $totalIn += $f.Length
    $outPath = Join-Path $outDir ("{0:D2}.jpg" -f $i)

    $img = [System.Drawing.Image]::FromFile($f.FullName)
    try {
        $scale = [Math]::Min(1.0, $MaxEdge / [Math]::Max($img.Width, $img.Height))
        $w = [int][Math]::Round($img.Width * $scale)
        $h = [int][Math]::Round($img.Height * $scale)

        $bmp = New-Object System.Drawing.Bitmap($w, $h)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.DrawImage($img, 0, 0, $w, $h)
        $g.Dispose()

        $bmp.Save($outPath, $codec, $ep)
        $bmp.Dispose()
    } finally {
        $img.Dispose()
    }

    $size = (Get-Item $outPath).Length
    $totalOut += $size
    Write-Host ("  {0,-10} {1,5}x{2,-5} {3,6} KB   <- {4}" -f (Split-Path $outPath -Leaf), $w, $h, [math]::Round($size / 1KB), $f.Name)
}

Write-Host ""
Write-Host ("{0} MB  ->  {1} MB" -f [math]::Round($totalIn / 1MB, 1), [math]::Round($totalOut / 1MB, 1)) -ForegroundColor Green

if ($Slug) {
    Write-Host ""
    Write-Host "Now add to data/work.ts:" -ForegroundColor Yellow
    Write-Host "  cover: `"/work/$Slug/01.jpg`","
    Write-Host "  media: ["
    for ($n = 2; $n -le $files.Count; $n++) {
        Write-Host ("    {{ type: `"photo`", src: `"/work/{0}/{1:D2}.jpg`", alt: `"…`" }}," -f $Slug, $n)
    }
    Write-Host "  ],"
}
