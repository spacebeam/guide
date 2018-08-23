#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Team Machine'
SITENAME = u'nonsense.ws'
SITEURL = 'https://blog.nonsense.ws'
PATH = 'content'
TIMEZONE = 'Etc/UTC'
DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_RSS = 'feeds/%s.rss.xml'

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
# Social widget
SOCIAL = (('Twitter', 'https://twitter.com/nonsensews'),
          ('GitHub','https://github.com/nonsensews'),
          ('YouTube', 'https://www.youtube.com/channel/UCA3yRAtuScdhoP5rJFpRS4w'))

LINKS = (('Wiki', 'https://github.com/nonsensews/guide/wiki'),
        ('Research', 'https://github.com/nonsensews/research/wiki'))


DEFAULT_PAGINATION = 2 

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

STATIC_PATHS = ['images', 'extra/CNAME']
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'},}

# Configure pelican theme
THEME = "pelican/eevee"

BIO = "Spontaneously evolve towards thermodynamic equilibrium"
PROFILE_IMAGE = "https://blog.nonsense.ws/theme/img/shaos.png"

USE_TWITTER_CARDS = True

TWITTER_USERNAME = 'nonsensews'

PLUGIN_PATHS = ['pelican/pelican-plugins']

PLUGINS = [
    'assets',
    'sitemap', 
    'neighbors',
    'pelican-toc',
    'series',
    'pelican_youtube',
    'ctags_generator',
    'always_modified',
    'pin_to_top'
    ]

SITEMAP = {
    'format':'xml'
}

MENUITEMS = (('About', 'distributed-artificial-intelligence.html'),
             ('Research','open-research-community.html'),
             ('Technology', 'open-source-technology.html'))

ARCHIVES_URL = 'archives.html'
ARCHIVES_SAVE_AS = 'archives.html'

YEAR_ARCHIVE_SAVE_AS = '{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = '{date:%Y}/{date:%m}/index.html'

ALWAYS_MODIFIED = True
