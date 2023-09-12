const app = require('../src/app');
const session = require('supertest')
const request = session(app);

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'",  async () => {
           const response = await request.get('/rickandmorty/character/1');
           const props = ["id", "name", "species", "gender", "status", "origin", "image"]

           props.forEach(props => {
            expect(response.body).toHaveProperty(props)
           });
        });

        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/3209j')
            expect(response.statusCode).tobe(500);
        });
    });
    describe("GET /rickandmorty/login", () => {
        const access = { access: true };

        it("Responde con un objeto con la propiedad access en true si la informacion del usuario es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=ejemplo@gmail.com&password=unaPassword');
            expect(response.body).toEqual(access);
        });

        it('Responde con un objeto con la propiedad access en false si la informacion del usuario no es válida', async () => {
            const response = await request.get('/rickandmorty/login?email=ejemplo@gmail.com&password=unaPassword');

            access.access = false;
            expect(response.body).toEqual(access);
        })
    })
})