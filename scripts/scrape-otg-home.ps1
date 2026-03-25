param(
  [string]$Url = "https://www.orlandotgroupinc.com/"
)

$ErrorActionPreference = "Stop"

$html = (Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 30).Content

function Get-UniqueUrls {
  param(
    [Parameter(Mandatory=$true)][string]$Region
  )
  # Extract likely asset URLs referenced in HTML.
  # Note: this intentionally includes only common raster formats.
  # Handles both absolute URLs (`https://...`) and protocol-relative (`//...`).
  $re = [regex]'(?i)(((?:https?:)?\/\/)[^"''\s>]+?\.(?:webp|jpe?g|png))'
  $matches = $re.Matches($Region)
  $urls = New-Object System.Collections.Generic.List[string]
  foreach($m in $matches) {
    $u = $m.Value
    if($u.StartsWith("//")) {
      $u = "https:" + $u
    }
    if(-not $urls.Contains($u)) { $null = $urls.Add($u) }
  }
  return ,$urls.ToArray()
}

# --- Locate regions by visible headings ---
$instMarker = "Follow us on Instagram"
$diffMarker = "WHAT MAKES US DIFFERENT"
$projMarker = "PROJECTS"

$instIdx = $html.IndexOf($instMarker)
$diffIdx = $html.IndexOf($diffMarker)
$projIdx = $html.IndexOf($projMarker)

if($instIdx -lt 0) { throw "Marker not found: $instMarker" }
if($diffIdx -lt 0) { throw "Marker not found: $diffMarker" }
if($projIdx -lt 0) { throw "Marker not found: $projMarker" }

$instRegion = $html.Substring($instIdx, [Math]::Min(450000, $projIdx - $instIdx))
$projRegion = $html.Substring($projIdx, [Math]::Min(400000, $html.Length - $projIdx))

$instagramUrls = Get-UniqueUrls -Region $instRegion
$projectUrls = Get-UniqueUrls -Region $projRegion

# --- YouTube embed id (Projects section video) ---
$ytRe = [regex]'youtube\.com\/embed\/([A-Za-z0-9_-]+)'
$ytMatch = $ytRe.Match($html)
$youtubeEmbedId = if($ytMatch.Success) { $ytMatch.Groups[1].Value } else { "" }

$out = [ordered]@{
  instagram = $instagramUrls | Select-Object -First 12
  projects = $projectUrls | Select-Object -First 24
  youtubeEmbedId = $youtubeEmbedId
}

$out | ConvertTo-Json -Depth 5 -Compress

