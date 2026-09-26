Npm scripts used for the application:
| Script | Command | Description | 
|:---|:---|:---|
| test | `vitest run` | Runs all tests |
| start | `tsx watch src/index.ts` | Runs the server and watches for changes |
| seed | `tsx prisma/seed.ts` | Seeds the database with initial data |
| docs | `typedoc --out docs` | Generates documentation |
| tsoa:spec | `tsoa spec` | Generates OpenAPI specifications |
| tsoa:routes | `tsoa routes` | Generates route types |
| tsoa:build | `tsoa spec-and-routes` | Generates routes and specifications |
| prisma:generate | `prisma generate` | Generates Prisma client |
| prisma:migrate | `prisma migrate dev` | Migrates the database |
| prisma:studio | `prisma studio` | Opens the Prisma studio |
| prisma:push | `prisma db push` | Pushes the database schema |
| prisma:reset | `prisma migrate reset` | Resets the database |
| check-circular | `madge src/ --circular` | Checks for circular dependencies |
| graph | `madge --extensions ts,tsx src/ --image graph.png` | Generates a graph of the application |
| 