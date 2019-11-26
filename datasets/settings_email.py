from decouple import config

DEFAULT_FROM_EMAIL = 'no-reply@datasets.librenepal.com'
MODERATOR_EMAILS = (
    'aatishnn@gmail.com',
    'bikalpabneupane@gmail.com'
)

EMAIL_HOST = config('EMAIL_HOST')
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_PORT = config('EMAIL_PORT')