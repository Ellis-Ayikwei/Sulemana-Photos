<#
.SYNOPSIS
    Record the pixel dimensions of every image in public/ into
    data/image-sizes.json.

.DESCRIPTION
    The masonry layout needs each photo's intrinsic aspect ratio up front, on
    the server, before anything loads. Rather than read the filesystem at
    request time, this bakes the dimensions into a JSON map the data layer
    imports.

    Re-run it whenever you add or replace photography.

.EXAMPLE
    ./scripts/measure-images.ps1
#>
[CmdletBinding()]
param()

Add-Type -AssemblyName System.Drawing

$repoRoot = Split-Path $PSScriptRoot -Parent
$publicDir = Join-Path $repoRoot "public"
$outFile = Join-Path $repoRoot "data\image-sizes.json"

$files = Get-ChildItem -Recurse -File -Path $publicDir -Include *.jpg, *.jpeg, *.png, *.webp |
    Sort-Object FullName

$map = [ordered]@{}

foreach ($f in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($f.FullName)
        # public/work/foo/01.jpg -> /work/foo/01.jpg
        $key = "/" + $f.FullName.Substring($publicDir.Length + 1).Replace("\", "/")
        $map[$key] = [ordered]@{ width = $img.Width; height = $img.Height }
        $img.Dispose()
    } catch {
        Write-Warning "could not read $($f.Name): $_"
    }
}

$json = $map | ConvertTo-Json -Depth 3
[System.IO.File]::WriteAllText($outFile, $json + "`n")

Write-Output "measured $($map.Count) images -> data/image-sizes.json"
