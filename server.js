const app = require('./app');
const dotenv = require('dotenv');
const prisma = require('./db/prisma');

dotenv.config();

async function main() {
  try {
    await prisma.user.create({
      data: {
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@gmail.com",
        password: "123456",
        profile_pic: "dsjnjdvs",
        phone: "09073663725"
      }
    });

    const port = 3000;
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

main();
await prisma.$transaction.commit();