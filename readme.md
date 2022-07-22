
# Django-Simple-Blog 📝

Django Simple Blog is a small blogging app in django, made as a pet project for educational purpose

# DEMO


## Tech Stack
- **Frontend:** HTML / CSS / Bootstrap (5.2)
- **Backend:** Django (4.0.5) / Django-Rest-Framework (3.13.1)
- **Database:** Postgres

## Features:
- **Login / Register:** abstract user class implemented for easy customisation as [django-docs recommend](https://docs.djangoproject.com/en/4.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project)
- **Image Uploading:** Users can upload images for their posts, that will be converted into .webp format automatically,to save some space. Also images get into **/media/posts/year/month/day/** to reduce load on a File System
- **DRF API:** Api for future frontend side of the project. JWT not implemented because of simplicity of the project.
- **Posting / Editing:** Registered users can post and edit own posts
- **Private posts:** Users can make their posts private
- **Filtering:** Clicking on author name user will show public posts of this author. Or public + private posts of current logged user.


## Quick Start

- Fork and Clone the repository using:
```
git clone https://github.com/habiboolean/Django-Simple-Blog.git
```
- Create virtual environment:
```
python -m venv env
env\Scripts\activate
```
- Install dependencies using:
```
pip install -r requirements.txt
```
- Put your database connection settings:
```
settings.py line 95
```
- Headover to Project Directory:
```
cd BlogPetProject
```
- Make migrations using:
```
python manage.py makemigrations
```

- Migrate Database:
```
python manage.py migrate
```
- Create a superuser:
```
python manage.py createsuperuser
```
- Run server using:
```
python manage.py runserver
```

## Useful Resources to Learn

- [Django Docs](https://docs.djangoproject.com/en/4.0/)
- [Bootstrap Docs](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [Git and GitHub](https://www.digitalocean.com/community/tutorials/how-to-use-git-a-reference-guide)


>![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTAuNTYiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMTAuNTYgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMTUuMzEiIGhlaWdodD0iMzUiIGZpbGw9IiNGRkZGRkYiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMTMuMzEiIHk9IjAiIHdpZHRoPSI5Ny4yNSIgaGVpZ2h0PSIzNSIgZmlsbD0iIzA5MkUyMCIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9Ik0xNS42OSAyMkwxNC4yMiAyMkwxNC4yMiAxMy40N0wxNi4xNCAxMy40N0wxOC42MCAyMC4wMUwyMS4wNiAxMy40N0wyMi45NyAxMy40N0wyMi45NyAyMkwyMS40OSAyMkwyMS40OSAxOS4xOUwyMS42NCAxNS40M0wxOS4xMiAyMkwxOC4wNiAyMkwxNS41NSAxNS40M0wxNS42OSAxOS4xOUwxNS42OSAyMlpNMjguNDkgMjJMMjYuOTUgMjJMMzAuMTcgMTMuNDdMMzEuNTAgMTMuNDdMMzQuNzMgMjJMMzMuMTggMjJMMzIuNDkgMjAuMDFMMjkuMTggMjAuMDFMMjguNDkgMjJaTTMwLjgzIDE1LjI4TDI5LjYwIDE4LjgyTDMyLjA3IDE4LjgyTDMwLjgzIDE1LjI4Wk00MS4xNCAyMkwzOC42OSAyMkwzOC42OSAxMy40N0w0MS4yMSAxMy40N1E0Mi4zNCAxMy40NyA0My4yMSAxMy45N1E0NC4wOSAxNC40OCA0NC41NyAxNS40MFE0NS4wNSAxNi4zMyA0NS4wNSAxNy41Mkw0NS4wNSAxNy41Mkw0NS4wNSAxNy45NVE0NS4wNSAxOS4xNiA0NC41NyAyMC4wOFE0NC4wOCAyMS4wMCA0My4xOSAyMS41MFE0Mi4zMCAyMiA0MS4xNCAyMkw0MS4xNCAyMlpNNDAuMTcgMTQuNjZMNDAuMTcgMjAuODJMNDEuMTQgMjAuODJRNDIuMzAgMjAuODIgNDIuOTMgMjAuMDlRNDMuNTUgMTkuMzYgNDMuNTYgMTcuOTlMNDMuNTYgMTcuOTlMNDMuNTYgMTcuNTJRNDMuNTYgMTYuMTMgNDIuOTYgMTUuNDBRNDIuMzUgMTQuNjYgNDEuMjEgMTQuNjZMNDEuMjEgMTQuNjZMNDAuMTcgMTQuNjZaTTU1LjA5IDIyTDQ5LjUxIDIyTDQ5LjUxIDEzLjQ3TDU1LjA1IDEzLjQ3TDU1LjA1IDE0LjY2TDUxLjAwIDE0LjY2TDUxLjAwIDE3LjAyTDU0LjUwIDE3LjAyTDU0LjUwIDE4LjE5TDUxLjAwIDE4LjE5TDUxLjAwIDIwLjgyTDU1LjA5IDIwLjgyTDU1LjA5IDIyWk02Ni42NSAyMkw2NC42OCAxMy40N0w2Ni4xNSAxMy40N0w2Ny40NyAxOS44OEw2OS4xMCAxMy40N0w3MC4zNCAxMy40N0w3MS45NiAxOS44OUw3My4yNyAxMy40N0w3NC43NCAxMy40N0w3Mi43NyAyMkw3MS4zNSAyMkw2OS43MyAxNS43N0w2OC4wNyAyMkw2Ni42NSAyMlpNODAuMzggMjJMNzguOTAgMjJMNzguOTAgMTMuNDdMODAuMzggMTMuNDdMODAuMzggMjJaTTg2Ljg3IDE0LjY2TDg0LjIzIDE0LjY2TDg0LjIzIDEzLjQ3TDkxLjAwIDEzLjQ3TDkxLjAwIDE0LjY2TDg4LjM0IDE0LjY2TDg4LjM0IDIyTDg2Ljg3IDIyTDg2Ljg3IDE0LjY2Wk05Ni4yNCAyMkw5NC43NSAyMkw5NC43NSAxMy40N0w5Ni4yNCAxMy40N0w5Ni4yNCAxNy4wMkwxMDAuMDUgMTcuMDJMMTAwLjA1IDEzLjQ3TDEwMS41MyAxMy40N0wxMDEuNTMgMjJMMTAwLjA1IDIyTDEwMC4wNSAxOC4yMUw5Ni4yNCAxOC4yMUw5Ni4yNCAyMloiIGZpbGw9IiMwOTJFMjAiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTMxLjQ3IDIyTDEyNy41MCAyMkwxMjcuNTAgMTMuNjBMMTMxLjQ3IDEzLjYwUTEzMi44NSAxMy42MCAxMzMuOTIgMTQuMTJRMTM0Ljk5IDE0LjYzIDEzNS41OCAxNS41OFExMzYuMTYgMTYuNTMgMTM2LjE2IDE3LjgwTDEzNi4xNiAxNy44MFExMzYuMTYgMTkuMDcgMTM1LjU4IDIwLjAyUTEzNC45OSAyMC45NyAxMzMuOTIgMjEuNDhRMTMyLjg1IDIyIDEzMS40NyAyMkwxMzEuNDcgMjJaTTEyOS44OCAxNS41MEwxMjkuODggMjAuMTBMMTMxLjM4IDIwLjEwUTEzMi40NSAyMC4xMCAxMzMuMTEgMTkuNDlRMTMzLjc2IDE4Ljg4IDEzMy43NiAxNy44MEwxMzMuNzYgMTcuODBRMTMzLjc2IDE2LjcyIDEzMy4xMSAxNi4xMVExMzIuNDUgMTUuNTAgMTMxLjM4IDE1LjUwTDEzMS4zOCAxNS41MEwxMjkuODggMTUuNTBaTTEzOS44MSAyMC45M0wxMzkuODEgMjAuOTNMMTQxLjExIDE5LjQwUTE0MS43OCAyMC4yNyAxNDIuNTUgMjAuMjdMMTQyLjU1IDIwLjI3UTE0Mi41NiAyMC4yNyAxNDIuNTYgMjAuMjdMMTQyLjU2IDIwLjI3UTE0My4wOCAyMC4yNyAxNDMuMzUgMTkuOTZRMTQzLjYyIDE5LjY1IDE0My42MiAxOS4wNUwxNDMuNjIgMTkuMDVMMTQzLjYyIDE1LjQ0TDE0MC43MiAxNS40NEwxNDAuNzIgMTMuNjBMMTQ1Ljk3IDEzLjYwTDE0NS45NyAxOC45MVExNDUuOTcgMjAuNTQgMTQ1LjE1IDIxLjM2UTE0NC4zMyAyMi4xNyAxNDIuNzMgMjIuMTdMMTQyLjczIDIyLjE3UTE0MS44MSAyMi4xNyAxNDEuMDUgMjEuODVRMTQwLjI5IDIxLjUzIDEzOS44MSAyMC45M1pNMTUyLjQ4IDIyTDE1MC4wNSAyMkwxNTMuNzYgMTMuNjBMMTU2LjEwIDEzLjYwTDE1OS44MiAyMkwxNTcuMzUgMjJMMTU2LjY5IDIwLjM3TDE1My4xNCAyMC4zN0wxNTIuNDggMjJaTTE1NC45MSAxNS45M0wxNTMuODMgMTguNjFMMTU1Ljk5IDE4LjYxTDE1NC45MSAxNS45M1pNMTY2LjMwIDIyTDE2My45NyAyMkwxNjMuOTcgMTMuNjBMMTY1LjkzIDEzLjYwTDE2OS42NCAxOC4wN0wxNjkuNjQgMTMuNjBMMTcxLjk2IDEzLjYwTDE3MS45NiAyMkwxNzAuMDEgMjJMMTY2LjMwIDE3LjUyTDE2Ni4zMCAyMlpNMTc2LjcwIDE3LjgwTDE3Ni43MCAxNy44MFExNzYuNzAgMTYuNTQgMTc3LjMwIDE1LjU0UTE3Ny44OSAxNC41NSAxNzguOTYgMTMuOTlRMTgwLjAzIDEzLjQzIDE4MS4zNyAxMy40M0wxODEuMzcgMTMuNDNRMTgyLjU1IDEzLjQzIDE4My40OSAxMy44M1ExODQuNDMgMTQuMjIgMTg1LjA1IDE0Ljk3TDE4NS4wNSAxNC45N0wxODMuNTQgMTYuMzNRMTgyLjY5IDE1LjQwIDE4MS41MiAxNS40MEwxODEuNTIgMTUuNDBRMTgxLjUwIDE1LjQwIDE4MS41MCAxNS40MEwxODEuNTAgMTUuNDBRMTgwLjQyIDE1LjQwIDE3OS43NiAxNi4wNlExNzkuMTAgMTYuNzEgMTc5LjEwIDE3LjgwTDE3OS4xMCAxNy44MFExNzkuMTAgMTguNTAgMTc5LjQwIDE5LjA0UTE3OS43MCAxOS41OSAxODAuMjQgMTkuODlRMTgwLjc4IDIwLjIwIDE4MS40NyAyMC4yMEwxODEuNDcgMjAuMjBRMTgyLjE2IDIwLjIwIDE4Mi43NiAxOS45M0wxODIuNzYgMTkuOTNMMTgyLjc2IDE3LjYyTDE4NC44NiAxNy42MkwxODQuODYgMjEuMTBRMTg0LjEzIDIxLjYxIDE4My4yMCAyMS44OVExODIuMjcgMjIuMTcgMTgxLjMzIDIyLjE3TDE4MS4zMyAyMi4xN1ExODAuMDEgMjIuMTcgMTc4Ljk1IDIxLjYxUTE3Ny44OSAyMS4wNSAxNzcuMzAgMjAuMDVRMTc2LjcwIDE5LjA2IDE3Ni43MCAxNy44MFpNMTg5LjQyIDE3LjgwTDE4OS40MiAxNy44MFExODkuNDIgMTYuNTUgMTkwLjAyIDE1LjU1UTE5MC42MyAxNC41NiAxOTEuNjkgMTQuMDBRMTkyLjc1IDEzLjQzIDE5NC4wOCAxMy40M0wxOTQuMDggMTMuNDNRMTk1LjQxIDEzLjQzIDE5Ni40OCAxNC4wMFExOTcuNTQgMTQuNTYgMTk4LjE1IDE1LjU1UTE5OC43NSAxNi41NSAxOTguNzUgMTcuODBMMTk4Ljc1IDE3LjgwUTE5OC43NSAxOS4wNSAxOTguMTUgMjAuMDRRMTk3LjU0IDIxLjA0IDE5Ni40OCAyMS42MFExOTUuNDIgMjIuMTcgMTk0LjA4IDIyLjE3TDE5NC4wOCAyMi4xN1ExOTIuNzUgMjIuMTcgMTkxLjY5IDIxLjYwUTE5MC42MyAyMS4wNCAxOTAuMDIgMjAuMDRRMTg5LjQyIDE5LjA1IDE4OS40MiAxNy44MFpNMTkxLjgyIDE3LjgwTDE5MS44MiAxNy44MFExOTEuODIgMTguNTEgMTkyLjEyIDE5LjA1UTE5Mi40MiAxOS42MCAxOTIuOTQgMTkuOTBRMTkzLjQ1IDIwLjIwIDE5NC4wOCAyMC4yMEwxOTQuMDggMjAuMjBRMTk0LjcyIDIwLjIwIDE5NS4yNCAxOS45MFExOTUuNzUgMTkuNjAgMTk2LjA1IDE5LjA1UTE5Ni4zNSAxOC41MSAxOTYuMzUgMTcuODBMMTk2LjM1IDE3LjgwUTE5Ni4zNSAxNy4wOSAxOTYuMDUgMTYuNTRRMTk1Ljc1IDE2IDE5NS4yNCAxNS43MFExOTQuNzIgMTUuNDAgMTk0LjA4IDE1LjQwTDE5NC4wOCAxNS40MFExOTMuNDUgMTUuNDAgMTkyLjkzIDE1LjcwUTE5Mi40MiAxNiAxOTIuMTIgMTYuNTRRMTkxLjgyIDE3LjA5IDE5MS44MiAxNy44MFoiIGZpbGw9IiNGRkZGRkYiIHg9IjEyNi4zMSIvPjwvc3ZnPg==)

