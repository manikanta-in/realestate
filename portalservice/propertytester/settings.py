"""
Django settings for propertytester project.

Generated by 'django-admin startproject' using Django 4.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-olf7lu^1ar*)4z++6y)u5@&ikeq)o77@-6ikh)sx%(wchy-bqu'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
REST_SESSION_LOGIN = False
ALLOWED_HOSTS = ['localhost']

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = False

CORS_ALLOWED_ORIGINS = [
    "http://localhost:8000"
]
CSRF_TRUSTED_ORIGINS = [
    "http://localhost:8000/"
]



STATIC_ROOT = os.path.join(BASE_DIR, "static/")
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'django_opensearch_dsl',
    'rest_framework_swagger',
     'corsheaders',
    # Django Elasticsearch integration
    #'django_elasticsearch_dsl',
    # Django REST framework Elasticsearch integration (this package)
    #'django_elasticsearch_dsl_drf',
    'property',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'request_logging.middleware.LoggingMiddleware', 
]

ROOT_URLCONF = 'propertytester.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'propertytester.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': BASE_DIR / 'db.sqlite3',
    # },
     'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'rightmyproperty',
        'USER': 'root',
        'PASSWORD': 'admin',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = [BASE_DIR / "static"]  
STATIC_ROOT = STATIC_ROOT = BASE_DIR / "staticfiles"  # new
STATICFILES_STORAGE = "django.contrib.staticfiles.storage.StaticFilesStorage"  # new
# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


REST_FRAMEWORK = {
     'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
    'rest_framework_simplejwt.authentication.JWTAuthentication', 
    'rest_framework.authentication.SessionAuthentication',
    'rest_framework.authentication.BasicAuthentication',
  
),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}


client_cert_path = '/home/azureuser/opensearch-1.3.1/config/kirk.pem'
client_key_path = '/home/azureuser/opensearch-1.3.1/config/kirk-key.pem'

OPENSEARCH_DSL = {
    'default': {
        'hosts': 'http://localhost:9200',
        'http_auth': ("admin", "admin"),
        'verify_certs': False
    },
    'secure': {
        'hosts': [{"scheme": "https", "host": "local", "port": 9200}],
        'http_auth': ("admin", "admin"),
        'timeout': 120,
        'verify_certs': False
       # 'client_cert_path' : client_cert_path,
       # 'client_key_path' : client_key_path
    },
}


SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'basic': {
            'type': 'basic'
        }
    }
}




LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': './debug.log',
        },
    },
    'loggers': {
        'django.request': {
            'handlers': ['console','file'],
            'level': 'DEBUG',  # change debug level as appropiate
            'propagate': False,
        },
        'property.views': {
            'handlers': ['console','file'],
            'level': 'DEBUG',  # change debug level as appropiate
            'propagate': False,
        },
    },
}