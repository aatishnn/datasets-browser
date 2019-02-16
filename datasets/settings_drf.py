REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'data.pagination.DefaultPagination',
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    )
}
