# Migración a GitHub Pages — Checklist de configuración

Este checklist contiene los pasos manuales que tú (Andres) tienes que aplicar en GitHub y en el panel DNS para terminar la migración. El código y el workflow ya están en el repo.

Repo: https://github.com/AndresIslas99/orzatech-com
Sitio destino: https://orzatech.com

---

## Paso 1 — Habilitar GitHub Pages ✅ HECHO POR API

Ya está aplicado vía `gh api`:
- Source = GitHub Actions ✓
- Custom domain = orzatech.com ✓
- Enforce HTTPS = false (se activará después de que el cert SSL provisione, post-DNS)

Verifícalo si quieres en https://github.com/AndresIslas99/orzatech-com/settings/pages

## Paso 2 — Re-correr el workflow ✅ HECHO

El primer run falló en `deploy` porque Pages no estaba habilitado. Ya re-ejecuté el workflow y debería estar verde ahora. Ver: https://github.com/AndresIslas99/orzatech-com/actions

## Paso 3 — Verificar deploy en URL temporal

Antes de cambiar DNS, verifica que el sitio funciona en la URL temporal de GitHub:

- https://andresislas99.github.io/orzatech-com/

Si todas las páginas cargan ahí, sigue al Paso 4.

> ⚠️ Si el sitio se ve roto (CSS no carga, links 404), avísame antes de cambiar DNS. Probablemente necesite `basePath` en next.config.ts solo para esta URL temporal.

## Paso 4 — Cambiar DNS en Cloudflare

> 🔍 Verificado: tu DNS autoritativo está en **Cloudflare** (`matias.ns.cloudflare.com`, `grace.ns.cloudflare.com`), no en Hostinger. Los cambios van en el dashboard de Cloudflare, no de Hostinger.

Entra a https://dash.cloudflare.com → selecciona la zona `orzatech.com` → DNS → Records.

### A. Borrar registros existentes del apex y www

Borra los registros `A` actuales del apex (`@`) — apuntan a IPs de Cloudflare proxy (`172.67.220.144`, `104.21.94.73`). Borra el registro de `www` también.

### B. Agregar registros nuevos para GitHub Pages

**Para `@` (apex orzatech.com):**

| Type | Name | IPv4 address        | Proxy status   | TTL  |
|------|------|---------------------|----------------|------|
| A    | @    | 185.199.108.153     | **DNS only** ⚠️ | Auto |
| A    | @    | 185.199.109.153     | **DNS only** ⚠️ | Auto |
| A    | @    | 185.199.110.153     | **DNS only** ⚠️ | Auto |
| A    | @    | 185.199.111.153     | **DNS only** ⚠️ | Auto |
| AAAA | @    | 2606:50c0:8000::153 | **DNS only** ⚠️ | Auto |
| AAAA | @    | 2606:50c0:8001::153 | **DNS only** ⚠️ | Auto |
| AAAA | @    | 2606:50c0:8002::153 | **DNS only** ⚠️ | Auto |
| AAAA | @    | 2606:50c0:8003::153 | **DNS only** ⚠️ | Auto |

**Para `www`:**

| Type  | Name | Target                   | Proxy status   | TTL  |
|-------|------|--------------------------|----------------|------|
| CNAME | www  | andresislas99.github.io  | **DNS only** ⚠️ | Auto |

### ⚠️ CRÍTICO: nube gris, no naranja

Para CADA registro nuevo, **toca la nube** y déjala **gris (DNS only)**, no naranja (Proxied).

**Por qué:** GitHub Pages necesita ver el DNS real para emitir el certificado SSL Let's Encrypt. Si Cloudflare proxy está activo (nube naranja), GitHub no puede provisionar el cert y rompe HTTPS.

Más adelante (después de que HTTPS esté activo en GitHub) puedes opcionalmente re-activar Cloudflare proxy con SSL/TLS mode = "Full" para tener el CDN extra. Pero para el switch inicial: nube gris.

### C. NO TOCAR
- Registros MX (correo) — déjalos como están si usas correo en orzatech.com (Google Workspace, Zoho, etc.).
- TXT (SPF, DKIM, DMARC) — déjalos.
- Cualquier subdominio que uses para apps internas.

### D. Detener Cloudflare Pages (si aplica)

Si tu sitio actual está en **Cloudflare Pages** (probable, dada tu mención de "subir a cloudfare la página compilada"):
1. Cloudflare dashboard → Workers & Pages → busca el proyecto del sitio.
2. Settings → Custom domains → quita `orzatech.com` y `www.orzatech.com` del proyecto.
3. (Opcional) Borra el proyecto cuando confirmes que GitHub Pages funciona.

## Paso 5 — Esperar propagación DNS

- **Tiempo típico:** 5 minutos a 2 horas. A veces hasta 24 h (raro).
- Verifica con:
  ```bash
  dig orzatech.com +short
  # debe responder con 185.199.108.153, 185.199.109.153, etc.

  dig www.orzatech.com +short
  # debe responder con andresislas99.github.io. y luego IPs
  ```
- O en https://dnschecker.org → escribe `orzatech.com` → debes ver las IPs de GitHub Pages globalmente.

## Paso 6 — Activar HTTPS en GitHub

Una vez que DNS propague:

1. https://github.com/AndresIslas99/orzatech-com/settings/pages
2. GitHub mostrará "Your site is live at https://orzatech.com" y validará el certificado.
3. Activa el checkbox **"Enforce HTTPS"**.

## Paso 7 — Validación final

```bash
curl -I https://orzatech.com
# debe responder: HTTP/2 200, headers de GitHub Pages

curl -I https://www.orzatech.com
# debe responder: 301 redirect a https://orzatech.com (GitHub redirige www → apex)
```

Visita https://orzatech.com en navegador y prueba navegación completa.

---

## A partir de aquí: cómo desplegar

```bash
# Editas código en local
git add <archivos>
git commit -m "feat: ..."
git push

# Espera ~3-4 min → cambio en orzatech.com
# Logs: https://github.com/AndresIslas99/orzatech-com/actions
```

Sin más uploads manuales a Hostinger. Cada push es deploy.

## Cancelar el hosting anterior (Cloudflare Pages / Hostinger)

Una vez que orzatech.com cargue desde GitHub Pages y verifiques que todo funciona en producción durante un par de días:

- **Cloudflare Pages**: borra el proyecto en Workers & Pages (si existía).
- **Hostinger**: si todavía tenías un plan de hosting activo, puedes cancelarlo. **No canceles el dominio** ni cambies los Nameservers — el DNS sigue siendo gestionado en Cloudflare.

## Resumen del nuevo flujo

```
git push origin main
   ↓ (3-4 min)
GitHub Actions builds + deploys
   ↓
orzatech.com actualizado
```

Sin uploads manuales. Sin pasar por Cloudflare Pages. Sin tocar Hostinger.
