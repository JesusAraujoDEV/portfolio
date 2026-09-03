# cambiar_color.ps1
# Conmuta el tono de las bandas "blood" del portfolio (Ruta B) entre Rojo y Rosa.
# Reescribe el atributo data-blood en src/app/layout.tsx; con `npm run dev`
# corriendo, el hot-reload aplica el tono al instante.
#
# Uso:  .\cambiar_color.ps1
# Navega con las flechas Arriba/Abajo y confirma con Enter. Esc para salir.

$ErrorActionPreference = "Stop"
$layoutPath = Join-Path $PSScriptRoot "src\app\layout.tsx"

if (-not (Test-Path $layoutPath)) {
    Write-Host "No se encontro layout.tsx en $layoutPath" -ForegroundColor Red
    exit 1
}

$options = @(
    @{ Key = "red";  Name = "Rojo  (#e01f1f) - texto hueso sobre rojo" },
    @{ Key = "pink"; Name = "Rosa  (#ffe1e1) - texto casi negro sobre rosa" }
)

# Detectar el tono actual para posicionar el cursor del menu.
$content = Get-Content $layoutPath -Raw
$current = if ($content -match 'data-blood="(?<v>[a-z]+)"') { $Matches.v } else { "red" }
$selected = [Math]::Max(0, ($options.Key).IndexOf($current))

function Show-Menu($sel) {
    Clear-Host
    Write-Host "  Cambiar color de banda 'blood'" -ForegroundColor Cyan
    Write-Host "  Flechas para mover, Enter para aplicar, Esc para salir.`n"
    for ($i = 0; $i -lt $options.Count; $i++) {
        if ($i -eq $sel) {
            Write-Host "  > $($options[$i].Name)" -ForegroundColor Green
        } else {
            Write-Host "    $($options[$i].Name)" -ForegroundColor Gray
        }
    }
}

while ($true) {
    Show-Menu $selected
    $key = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    switch ($key.VirtualKeyCode) {
        38 { $selected = ($selected - 1 + $options.Count) % $options.Count }  # Arriba
        40 { $selected = ($selected + 1) % $options.Count }                  # Abajo
        27 { Clear-Host; Write-Host "Sin cambios." -ForegroundColor Yellow; exit 0 } # Esc
        13 {  # Enter
            $chosen = $options[$selected].Key
            $updated = $content -replace 'data-blood="[a-z]+"', "data-blood=`"$chosen`""
            Set-Content -Path $layoutPath -Value $updated -NoNewline
            Clear-Host
            Write-Host "Tono aplicado: $chosen" -ForegroundColor Green
            Write-Host "Si 'npm run dev' esta corriendo, recarga solo." -ForegroundColor DarkGray
            exit 0
        }
    }
}
