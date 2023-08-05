# Generated by Django 3.1.2 on 2023-04-24 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chicken',
            fields=[
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('breed', models.CharField(blank=True, max_length=50, null=True)),
                ('age', models.CharField(blank=True, max_length=50, null=True)),
                ('sex', models.CharField(blank=True, max_length=50, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
    ]
