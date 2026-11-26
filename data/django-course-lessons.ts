import type { LearningLesson } from "./learning-resources";

type Row = [id: string, title: string, section: string, summary: string];
const rows: Row[] = [
  ["course-home","Django Home","Django Tutorial","Django is a Python web framework that provides URL routing, views, templates, models, forms, and an admin site."],
  ["intro","Django Introduction","Django Tutorial","A Django project connects incoming requests to views, uses models to work with data, and renders responses such as HTML."],
  ["get-started","Get Started with Django","Django Tutorial","A Django learning environment needs a supported Python version, an isolated environment, Django installed, and a project to run."],
  ["virtual-environment","Create a Virtual Environment","Django Tutorial","A virtual environment keeps project dependencies separate from other Python projects on the same computer."],
  ["install","Install Django","Django Tutorial","Install Django into the active virtual environment and check the installed version before starting a project."],
  ["create-project","Create a Django Project","Django Tutorial","A Django project contains settings and URL configuration that connect one or more application modules."],
  ["create-app","Create a Django App","Django Tutorial","A Django app groups related models, views, templates, and other code that can be enabled in a project."],
  ["views","Django Views","Django Tutorial","A view receives a request and returns a response, often by querying data and rendering a template."],
  ["urls","Django URLs","Django Tutorial","URL patterns map requested paths to views and can capture typed path parameters."],
  ["templates","Django Templates","Django Tutorial","Django templates render presentation with variables, tags, filters, inheritance, and automatic escaping."],
  ["models","Django Models","Django Tutorial","Models define application data as Python classes whose fields map to database columns and relationships."],
  ["insert-data","Insert Data","Django Tutorial","Create model instances and save them through Django's ORM after validating the data."],
  ["update-data","Update Data","Django Tutorial","Update a model instance or queryset deliberately, then persist changes through a save or update operation."],
  ["delete-data","Delete Data","Django Tutorial","Delete records through the ORM only after checking ownership, permissions, and the intended deletion scope."],
  ["update-model","Update a Model","Django Tutorial","Model changes are recorded in migrations and applied to a database in a controlled sequence."],
  ["prepare-view-template","Prepare a View and Template","Display Data","A view supplies a template with context data so the template can render a response."],
  ["details-link","Add a Details Link","Display Data","A details link should use a named URL and an object identifier to open the matching record."],
  ["master-template","Create a Base Template","Display Data","Template inheritance lets child pages reuse a shared layout through named blocks."],
  ["main-index","Add a Main Index Page","Display Data","An index view can query a collection and render a page that links to individual details."],
  ["404-template","Django 404 Responses","Display Data","Use Http404 or get_object_or_404 to return a not-found response when an object does not exist."],
  ["test-view","Test a Django View","Display Data","Django's test client exercises URL routing and responses without starting a public server."],
  ["admin","Django Admin","Django Admin","The Django admin provides a trusted staff interface for managing registered models."],
  ["create-user","Create an Admin User","Django Admin","A superuser can access the admin site; use a strong unique password and keep staff access restricted."],
  ["include-models","Register Models in Admin","Django Admin","Register a model with an admin site to make its records available to authorized staff."],
  ["list-display","Configure List Display","Django Admin","ModelAdmin list_display selects useful columns for the admin changelist."],
  ["admin-update","Update Records in Admin","Django Admin","Authorized staff can edit model records through the admin change form."],
  ["admin-add","Add Records in Admin","Django Admin","The admin add form uses model fields and validation to create records."],
  ["admin-delete","Delete Records in Admin","Django Admin","Admin deletion uses a confirmation flow; assess related objects and permissions before enabling destructive actions."],
  ["template-variables","Template Variables","Django Syntax","Template variables display values from the context using double curly braces."],
  ["template-tags","Template Tags","Django Syntax","Template tags use percent-delimited syntax to control rendering or load template features."],
  ["template-if","Template If and Else","Django Syntax","The if tag selects template output based on a context value or supported condition."],
  ["template-for","Template For Loop","Django Syntax","The for tag repeats a template block for each item in an iterable context value."],
  ["template-comment","Template Comments","Django Syntax","Template comment tags prevent a region from appearing in rendered output."],
  ["template-include","Include a Template","Django Syntax","The include tag renders a reusable template fragment with an optional context."],
  ["queryset-intro","QuerySet Introduction","QuerySets","A QuerySet represents a database lookup and is generally evaluated lazily when results are needed."],
  ["queryset-get","QuerySet get()","QuerySets","get() retrieves exactly one matching object and raises an exception if none or multiple objects match."],
  ["queryset-filter","QuerySet filter()","QuerySets","filter() builds a query for records matching lookup conditions and returns a QuerySet."],
  ["queryset-order","QuerySet order_by()","QuerySets","order_by() requests results in a defined field order; use a stable tie-breaker for consistent pagination."],
  ["static-files","Add Static Files","Static Files","Static files such as CSS, JavaScript, and images should be namespaced and referenced with Django's static template tag."],
  ["whitenoise","Serve Static Files in Production","Static Files","A production static-file strategy serves collected assets efficiently; WhiteNoise is one option for supported deployments."],
  ["collect-static","Collect Static Files","Static Files","collectstatic gathers app and project static assets into STATIC_ROOT for a deployment process to serve."],
  ["global-static","Project-Level Static Files","Static Files","STATICFILES_DIRS can include shared project assets that are not owned by a specific app."],
  ["project-styles","Add Styles to a Project","Static Files","A project stylesheet can be loaded from a static directory and linked through Django's static tag."],
  ["postgres-intro","PostgreSQL Introduction","PostgreSQL","PostgreSQL is a relational database option commonly selected for production Django applications."],
  ["aws-account","Cloud Database Planning","PostgreSQL","Before using a hosted database, plan account security, network access, backups, region, and expected cost."],
  ["rds-database","Create a Managed PostgreSQL Database","PostgreSQL","A managed database service handles infrastructure tasks while the application owner remains responsible for access, data, and configuration."],
  ["connect-database","Connect Django to PostgreSQL","PostgreSQL","Django's database settings specify the PostgreSQL backend and connection details, which should come from protected configuration."],
  ["postgres-add-data","Write Data to PostgreSQL","PostgreSQL","Once configured and migrated, the Django ORM uses the selected database backend for normal model operations."],
  ["certificate","Django Certificate Preparation","Django Cert","Certificate preparation should combine framework concepts with hands-on practice and the current exam or course outline."],
  ["deploy-elastic-beanstalk","Django Deployment Overview","Deploy Django","Deployment moves a tested application to a production hosting environment with suitable settings and a production server."],
  ["requirements","Create requirements.txt","Deploy Django","A dependency file records packages needed to recreate the project environment."],
  ["deploy-config","Deployment Configuration","Deploy Django","Production configuration should define environment-specific settings without committing secrets."],
  ["deployment-archive","Prepare a Deployment Artifact","Deploy Django","A deployment artifact should include application code and required metadata while excluding local secrets and unnecessary files."],
  ["deploy","Deploy a Django Application","Deploy Django","A deployment applies code and configuration, performs checks and migrations, and verifies the live service."],
  ["update-project","Update a Deployed Project","Deploy Django","A safe update process deploys a known code version, applies compatible migrations, and checks health after release."],
  ["slug-field","Add a Slug Field","More Django","A slug is a URL-friendly identifier that should be validated and kept unique where routes rely on it."],
  ["bootstrap","Use Bootstrap with Django","More Django","Django templates can load Bootstrap styles as static or external assets while retaining semantic, accessible markup."],
  ["template-tag-reference","Template Tag Reference","Django References","The template tag reference explains built-in tags for control flow, URL generation, static assets, and template composition."],
  ["filter-reference","Template Filter Reference","Django References","Template filters transform display values, such as formatting dates or escaping text."],
  ["field-lookups","Field Lookup Reference","Django References","Field lookups express database comparisons such as exact matches, ranges, and text searches."],
  ["compiler","Django Project Tools","Django Exercises","Django's command-line tools create projects, apps, run checks, manage migrations, and start a local development server."],
  ["exercises","Django Exercises","Django Exercises","Exercises help practice routing, views, templates, models, admin, and queries in a small project."],
  ["quiz","Django Quiz","Django Exercises","A quiz can check how requests flow through URLs, views, models, templates, and middleware."],
  ["syllabus","Django Syllabus","Django Exercises","A study path begins with setup and request handling, then covers models, templates, admin, static assets, databases, and deployment."],
  ["study-plan","Django Study Plan","Django Exercises","A practical study plan alternates short readings with building, testing, and reviewing a small Django application."],
  ["server","Django Development Server","Django Exercises","The runserver command is for local development and is not designed to serve a production website."],
];

const snippets: Record<string, string> = {
  "virtual-environment":`python -m venv .venv\n# Windows PowerShell\n.venv\\Scripts\\Activate.ps1\n# macOS or Linux\nsource .venv/bin/activate`,
  install:`python -m pip install Django\npython -m django --version`,
  "create-project":`django-admin startproject config .\npython manage.py check`,
  "create-app":`python manage.py startapp catalog\n# Add "catalog" to INSTALLED_APPS in settings.py`,
  urls:`from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path("books/<int:book_id>/", views.book_detail, name="book-detail"),\n]`,
  views:`from django.shortcuts import render\n\ndef book_list(request):\n    books = Book.objects.order_by("title")\n    return render(request, "catalog/book_list.html", {"books": books})`,
  models:`from django.db import models\n\nclass Book(models.Model):\n    title = models.CharField(max_length=160)\n    published_year = models.PositiveSmallIntegerField()\n\n    def __str__(self):\n        return self.title`,
  "insert-data":`book = Book(title="River Maps", published_year=2024)\nbook.full_clean()\nbook.save()`,
  "update-data":`book = Book.objects.get(pk=book_id)\nbook.title = "Coastal Atlas"\nbook.full_clean()\nbook.save(update_fields=["title"])`,
  "delete-data":`from django.shortcuts import get_object_or_404\n\nbook = get_object_or_404(Book, pk=book_id)\nbook.delete()`,
  "update-model":`python manage.py makemigrations catalog\npython manage.py migrate\npython manage.py showmigrations`,
  "master-template":`<!-- templates/base.html -->\n<!doctype html>\n<html lang="en"><body>\n  <header><a href="{% url 'catalog:index' %}">Catalog</a></header>\n  <main>{% block content %}{% endblock %}</main>\n</body></html>\n\n<!-- templates/catalog/index.html -->\n{% extends "base.html" %}\n{% block content %}<h1>Books</h1>{% endblock %}`,
  "404-template":`from django.http import Http404\nfrom django.shortcuts import get_object_or_404\n\nbook = get_object_or_404(Book, pk=book_id)`,
  "test-view":`from django.test import TestCase\nfrom django.urls import reverse\n\nclass CatalogPageTests(TestCase):\n    def test_index_loads(self):\n        response = self.client.get(reverse("catalog:index"))\n        self.assertEqual(response.status_code, 200)`,
  admin:`from django.contrib import admin\nfrom .models import Book\n\n@admin.register(Book)\nclass BookAdmin(admin.ModelAdmin):\n    list_display = ("title", "published_year")\n    search_fields = ("title",)`,
  "queryset-filter":`recent = Book.objects.filter(published_year__gte=2020)\nfor book in recent:\n    print(book.title)`,
  "queryset-order":`books = Book.objects.order_by("title", "pk")`,
  "static-files":`{% load static %}\n<link rel="stylesheet" href="{% static 'catalog/site.css' %}">`,
  "collect-static":`# settings.py\nSTATIC_URL = "static/"\nSTATIC_ROOT = BASE_DIR / "collected-static"\n\n# Prepare deployment assets\npython manage.py collectstatic`,
  "connect-database":`# settings.py (read secrets from environment in real deployments)\nDATABASES = {\n    "default": {\n        "ENGINE": "django.db.backends.postgresql",\n        "NAME": DB_NAME,\n        "USER": DB_USER,\n        "PASSWORD": DB_PASSWORD,\n        "HOST": DB_HOST,\n        "PORT": "5432",\n    }\n}`, 
  requirements:`python -m pip freeze > requirements.txt\n# Install recorded dependencies in another environment\npython -m pip install -r requirements.txt`,
  "deploy-config":`DEBUG = False\nALLOWED_HOSTS = ["app.example.test"]\n# Read SECRET_KEY and DATABASE_URL from protected environment settings.`,
  "slug-field":`from django.db import models\nfrom django.utils.text import slugify\n\nclass Article(models.Model):\n    title = models.CharField(max_length=160)\n    slug = models.SlugField(unique=True)\n\n    def save(self, *args, **kwargs):\n        if not self.slug:\n            self.slug = slugify(self.title)\n        super().save(*args, **kwargs)`,
  "field-lookups":`Book.objects.filter(published_year__gte=2020)\nBook.objects.filter(title__icontains="river")`,
};

function exampleFor(id: string, section: string): string {
  if (snippets[id]) return snippets[id];
  if (section === "Django Syntax") return `{% if user.is_authenticated %}\n  <p>Welcome, {{ user.username|escape }}.</p>\n{% else %}\n  <a href="{% url 'login' %}">Sign in</a>\n{% endif %}`;
  if (section === "Django Admin") return `# In the Django admin, open the model changelist.\n# Use the add, change, or delete form only with authorized staff access.`;
  if (section === "PostgreSQL") return `# Apply model schema changes to the configured database.\npython manage.py migrate\n\n# Check configuration and migration state before release.\npython manage.py check`;
  if (section === "Deploy Django") return `# Prepare and verify a deployment.\npython manage.py check --deploy\npython manage.py migrate\npython manage.py collectstatic --noinput`;
  if (section === "Display Data") return `from django.shortcuts import render\n\ndef page(request):\n    return render(request, "catalog/page.html", {"title": "Reading list"})`;
  if (section === "QuerySets") return `books = Book.objects.all()\nfor book in books[:20]:\n    print(book.title)`;
  if (section === "Static Files") return `{% load static %}\n<img src="{% static 'catalog/cover.svg' %}" alt="Book cover">`;
  return `# ${id.replaceAll("-", " ")}\n# Use Django's documented command or API, then verify the result.\npython manage.py check`;
}

function makeLesson([id, title, section, summary]: Row): LearningLesson {
  const example = exampleFor(id, section);
  const deployment = section === "Deploy Django" || id === "server";
  return {
    id: `course-${id}`, title, section, level: "Beginner", summary, contentLanguage: "en",
    content: [summary,
      "Work in an isolated Python environment and follow the version-specific Django documentation for installation and supported Python versions. A clear project layout separates project configuration from app features.",
      deployment ? "Production is different from local development: do not use runserver, keep DEBUG disabled, protect SECRET_KEY and database credentials, configure allowed hosts and HTTPS, collect static assets, and review backups and error reporting." : "Django's request flow connects URL patterns to a view. Views can validate input, call the ORM, and render templates; migrations record schema changes. Keep permissions on the server and avoid putting secrets in source control.",
      "Example walkthrough: adapt the names to your project, run Django's system checks, and verify behavior with a small test client case before building on the pattern.",
    ],
    example,
    examples: [{ title: "Django example", code: example, result: "The exact result depends on your app names, settings, model data, and Django version." }],
    reading: { title: "Official Django 6.0 documentation", url: id.includes("static") || id.includes("collect") ? "https://docs.djangoproject.com/en/6.0/howto/static-files/" : deployment ? "https://docs.djangoproject.com/en/6.0/howto/deployment/checklist/" : "https://docs.djangoproject.com/en/6.0/" },
    quiz: { question: `What is a sound approach to ${title.toLowerCase()}?`, options: ["Use Django's documented APIs, check inputs and permissions, and verify the result", "Trust every browser value without server checks", "Use the development server for public production traffic"], answer: 0, explanation: "Django features work best when combined with server-side validation, access control, and version-appropriate documentation." },
  };
}

export const djangoCourseLessons: LearningLesson[] = rows.map(makeLesson);
