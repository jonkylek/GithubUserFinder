from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'githubviewer.views.home', name='home'),
    url(r'^results$', 'githubviewer.views.githubFinder', name='results'),
    url(r'^admin/', include(admin.site.urls)),
)
