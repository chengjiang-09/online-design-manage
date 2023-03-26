import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'online-desgin API',
    version: '1.0.0',
    description: 'API documentation'
  },
  servers: [{
    url: 'http://localhost:8001',
    description: 'Development server'
  }]
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../routers/*.ts')]
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerUiConfig = {
  title: "API Documentation",
  routePrefix: "/docs",
  swaggerOptions: {
    url: "design/swagger.json",
  },
}

export default swaggerSpec;
