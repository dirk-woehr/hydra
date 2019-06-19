Set oShell = WScript.CreateObject ("WScript.Shell")
oShell.run "py -m http.server 8080"
Set oShell = Nothing