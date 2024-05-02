$limit = (Get-Date).AddDays(-7)
$userProfile = [System.Environment]::GetFolderPath([System.Environment+SpecialFolder]::UserProfile)
$path = Join-Path $userProfile "AppData\LocalLow\yellow Dog Man Studios\Resonite\Assets"
$path2 = Join-Path $userProfile "AppData\Local\Temp\Yellow Dog Man Studios\Resonite\Cache"

Get-ChildItem -Path $path -Recurse -Force | Where-Object { $_.LastAccessTime -lt $limit } | Remove-Item -Force
Get-ChildItem -Path $path2 -Recurse -Force | Where-Object { $_.LastAccessTime -lt $limit } | Remove-Item -Force
