# Generated by Django 4.0.5 on 2022-06-07 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actor', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='actor',
            name='birth_date',
            field=models.DateField(null=True),
        ),
    ]