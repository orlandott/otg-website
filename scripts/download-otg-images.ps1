param(
  [string]$BaseDir = (Get-Location).Path
)

$ErrorActionPreference = "Stop"

function Ensure-Dir {
  param([string]$Path)
  if (!(Test-Path $Path)) {
    New-Item -ItemType Directory -Path $Path | Out-Null
  }
}

$instDir = Join-Path $BaseDir "public/images/instagram"
$projDir = Join-Path $BaseDir "public/images/projects"
Ensure-Dir $instDir
Ensure-Dir $projDir

$instagram = @(
  @("instagram-1.webp", "https://static.wixstatic.com/media/361735_2f2f7143f90c4911869663084b6439ea~mv2.webp"),
  @("instagram-2.webp", "https://static.wixstatic.com/media/24f7c0_97d25d75fce84aaf8ee1f3b30c1684cd~mv2.webp"),
  @("instagram-3.webp", "https://static.wixstatic.com/media/361735_e60e3eb595534e9382f2de1107d36e58~mv2.webp"),
  @("instagram-4.jpg", "https://static.wixstatic.com/media/8f1ac17fdd3a4416ae16e1909f77f8e6.jpg")
)

$projects = @(
  @("project-1.jpg", "https://static.wixstatic.com/media/361735_48dabac9a86649dabb10546d42eda6d3~mv2.jpg"),
  @("project-2.jpg", "https://static.wixstatic.com/media/5b73f9_9893749451e146ad8c066d3c993ef88b~mv2.jpg"),
  @("project-3.jpg", "https://static.wixstatic.com/media/5b73f9_d94c0324ecfe4d4ba28d4dced0109929~mv2.jpg"),
  @("project-4.webp", "https://static.wixstatic.com/media/361735_d59ef3a88af843ce8bcfa6a57b29d9ad~mv2.webp"),
  @("project-5.jpeg", "https://static.wixstatic.com/media/5b73f9_0751d7a31bb6443aa320183da6d0e51c~mv2.jpeg"),
  @("project-6.jpg", "https://static.wixstatic.com/media/5b73f9_dc3757dbe5504b98877fd09546028085~mv2.jpg")
)

foreach($item in $instagram) {
  $fileName = $item[0]
  $url = $item[1]
  $dest = Join-Path $instDir $fileName
  if (!(Test-Path $dest)) {
    Invoke-WebRequest -Uri $url -OutFile $dest
  }
}

foreach($item in $projects) {
  $fileName = $item[0]
  $url = $item[1]
  $dest = Join-Path $projDir $fileName
  if (!(Test-Path $dest)) {
    Invoke-WebRequest -Uri $url -OutFile $dest
  }
}

Write-Output "download-complete"

