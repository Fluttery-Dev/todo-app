const zod = require("zod");

const createTodoSchema = zod.Object(
    {
        title: zod.String(),
        description: zod.String(),
    }
);

const updateTodoSchema = zod.Object(
    {
        id: zod.String(),
    }
);

module.exports = {createTodoSchema,updateTodoSchema};