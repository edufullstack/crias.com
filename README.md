# Crias.com

Este proyecto es una aplicación web para el monitoreo de la salud de las crías. La idea detrás de esta aplicación es permitir que los cuidadores de crías puedan ingresar los datos de salud de sus animales y llevar un registro detallado del mismo.

La aplicación está construida utilizando React y Redux para el front-end y Node.js con Express para el back-end. La base de datos utilizada es PostrgreSQL.

### Funcionalidades

Registro y login de usuarios
Registro de crías con información detallada, incluyendo peso, altura, edad y datos de salud
Monitoreo de la salud de las crías a través de la introducción de datos de temperatura, frecuencia cardiaca, frecuencia respiratoria y presión sanguínea
Visualización de los datos de salud en gráficos para una mejor comprensión de la evolución de la salud de las crías
Alertas personalizadas para los cuidadores en caso de que la salud de las crías sea motivo de preocupación
Persistencia de datos utilizando la tecnología Local Storage
Validaciones en los formularios para asegurar la correcta introducción de datos
Configuración de la base de datos
Para hacer la conexión de la base de datos (PostgreSQL) en local, deberá crear un archivo .env dentro de la carpeta api con las credenciales de la base de datos, poniéndole los siguientes nombres a las variables:

.env:


DB_USER=


DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_NAME=

### Uso

Para probar todas las funcionalidades juntas, registre un tipo de usuario "master". Si desea probarlas por separado, puede ir registrando usuarios individualmente.

La aplicación es altamente personalizable y escalable, por lo que puede ser utilizada por cuidadores de crías de diferentes especies y tamaños.
