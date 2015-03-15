---
comments: true
date: 2012-04-16 02:34:25
layout: post
slug: moving-wordpress-from-dreamhost-to-linode
title: Moving Wordpress from Dreamhost to Linode
wordpress_id: 181
categories:
- Hacking
tags:
- Dreamhost
- Linode
- Wordpress
---

I talked about the reasons to move to[ Linode](http://www.linode.com/?r=bcc2d975734b43800b9dd375fa8356d2dbd71cc8) in [my post](http://www.rohitmishra.me/blog/2012/04/14/hello-linode/) yesterday. Now, I will mention the resources I used to move my Wordpress blog over to Linode.

You need to start by exporting your Wordpress database to a sql file . You can do it using phpMyAdmin.

Next, you need to copy your wp-content folder using a FTP program like FileZilla.

I then followed this [excellent tutorial](http://www.raywenderlich.com/812/how-to-move-your-wordpress-blog-to-linode) for moving a Wordpress blog to Linode. This is a comprehensive tutorial which will guide you from the first step of signing up for Linode .

There are some errors and typos in that tutorial that you should take care of.

The correct syntax for importing your old wordpress database is

    
    $ mysql -u username -p -h localhost Database-Name < data.sql


If you have a dedicated database server, replace localhost hostname with with actual server name or IP address. If while creating the user for the database at mysql prompt, you didn't add the " @localhost " part, remove " -h localhost".

While editing wp-config.php, make sure that you enter the same prefix as in your old wordpress database in $WP_Prefix variable. You can find your old wp-prefix by examining the table names in your wordpress database.

In the tutorial linked above, there is a mistake in **#protect wpconfig.php**. It should be:

    
    # protect wpconfig.php
    
    order allow, deny
    deny from all


The Wordpress specific settings depend on how you have setup your permalinks. You will find those settings at Settings->Permalinks in your Wordpress dashboard.

If you are hosting your Wordpress blog in a sub-directory  like /blog, you should place your.htaccess file in /blog and not in /.

The uploads folder should be _chmoded _to 775 and not 755.

In this configuration, you won't be able to update Wordpress and its plugins from within the dashboard. Wordpress will prompt you to enter FTP credentials. Don't do that. The problem is that Wordpress runs under apache's username, which is www-data, and this user doesn't has permissions to write to your wordpress folder. The secure way is to do updates manually from the shell. If you want  to be able to do it from the DashBoard, you should refer to [this IRC log.](http://www.linode.com/irc/logs/linode-archive/linode.log-2011-03-12)

Basically, before updating, you need to run

    
    chown -R www-data /path/to/the/wordpress/install/on/your/filesystem/


Revert it back to the default user after updating.

Hope these steps help you in moving Wordpress to Linode. If there is anything that I am doing wrong, do point out in the comments.

If you are feeling great, please signup to Linode using [my referral link](http://www.linode.com/?r=bcc2d975734b43800b9dd375fa8356d2dbd71cc8).
