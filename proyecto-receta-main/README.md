# Proyecto Recetas 🍲
Aplicación web full-stack para compartir y descubrir recetas.  
Resuelve el problema de organizar recetas en línea, permitiendo a usuarios leer, crear y gestionar contenido gastronómico.

🔗 Demo en vivo: https://proyecto-receta.vercel.app

---

## 🛠️ Stack tecnológico
- Next.js 14 (App Router)
- TypeScript 5
- Tailwind CSS 3
- Supabase (PostgreSQL + Auth)
- Vercel (deploy)

---

## 👥 Roles de usuario
- **Lector**: puede ver recetas, guardar favoritas y comentar.  
- **Chef**: puede crear, editar y eliminar sus propias recetas.  
- **Admin**: gestiona usuarios y supervisa contenido.

---

## 🗂️ Modelo de datos
Tablas en Supabase:
- `users_profiles` → información extendida de usuarios  
- `recipes` → recetas creadas por los chefs  
- `comments` → comentarios de los lectores  

Relaciones:
- Un usuario tiene muchas recetas  
- Una receta tiene muchos comentarios  

---

## ⚙️ Instalación local
```bash
git clone https://github.com/priscila-qui/proyecto-receta.git
cd proyecto-receta
npm install
cp .env.example .env.local # completar con tus claves
npm run dev
-------------------------
##Variables de entorno
NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

##Funcionalidades
Diseño global con barra de navegación

Página de inicio pública

Iniciar sesión y registro de usuarios

Listado y detalle de recetas

Panel de control privado

Formulario de creación de recetas

API interna con Supabase

 CRUD completo (GET, POST, PUT, DELETE)


Implementar en Vercel con dominio público
