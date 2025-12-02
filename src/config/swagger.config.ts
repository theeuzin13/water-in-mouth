import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Show Manager API')
    .setVersion('1.0')
    .setDescription('Show Manager API documentation')
    .addServer(
      process.env.NODE_ENV === 'production'
        ? 'https://api.showmanager.com'
        : `http://localhost:${process.env.APP_PORT ?? 3000}`,
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description:
          'Use o token JWT no formato: Bearer {token}',
      },
      'bearerAuth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const theme = new SwaggerTheme();

  writeFileSync('./swagger.json', JSON.stringify(document, null, 2), 'utf-8');

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
  });
}
