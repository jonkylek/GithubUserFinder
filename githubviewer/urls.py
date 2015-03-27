from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'githubviewer.views.home', name='home'),
    url(r'^results$', 'githubviewer.views.githubFinder', name='results'),
    #url(r'^home2/$', 'githubviewer.views.home2', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
