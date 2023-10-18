Documentation de l'Application Express.js
- Introduction

Cette documentation décrit une application Express.js qui offre des fonctionnalités de gestion d'utilisateurs, d'authentification, et la possibilité de créer, afficher, éditer et supprimer des burgers.

ROUTE DE BASE DE L'APPLI

- Pour les user le prefix de l'application est /api/user/... le chemin que vous voulez
- Pour les burger le prefix est /api/burger/... le chemin que vous voulez 


Routes

1. Enregistrement (Register)
   
    - Méthode HTTP : POST
    - Chemin : /register
    - Description : Cette route permet aux utilisateurs de créer un compte en fournissant un nom d'utilisateur (username), une adresse e-mail (email), et un mot de passe (password).

3. Connexion (Login)

    - Méthode HTTP : POST
    - Chemin : /login
    - Description : Utilisée pour l'authentification, cette route permet aux utilisateurs de se connecter en fournissant un nom d'utilisateur (username), une adresse e-mail (email) et un         mot de passe (password).

4. Déconnexion (Logout)

    - Méthode HTTP : GET
    - Chemin : /logout
    - Description : Cette route permet à l'utilisateur connecté de se déconnecter de son compte.

5. Accéder à la carte des burgers

    - Méthode HTTP : GET
    - Chemin : /
    - Description : Cette route permet aux utilisateurs connectés d'accéder à la carte des burgers. L'utilisateur doit être authentifié pour utiliser cette route.

6. Ajouter un burger

    - Méthode HTTP : POST
    - Chemin : /add
    - Description : Permet d'ajouter un nouveau burger à la carte. Les paramètres requis sont le nom du burger (name), les ingrédients (ingredient), et le prix (price).

7. Supprimer un burger

    - Méthode HTTP : DELETE
    - Chemin : /delete/Id
    - Description : Cette route permet de supprimer un burger spécifique de la carte en utilisant son identifiant (Id).

8. Modifier un burger

    - Méthode HTTP : PUT
    - Chemin : /modify/name
    - Description : Cette route permet de modifier les détails d'un burger existant en utilisant son nom (name).

Exemple d'utilisation

Voici un exemple de séquence d'utilisation de l'application :

    L'utilisateur s'inscrit en utilisant la route /register avec un nom d'utilisateur, une adresse e-mail et un mot de passe.
    Il se connecte en utilisant la route /login avec le nom d'utilisateur, une adresse e-mail et le mot de passe.
    Une fois connecté, il peut accéder à la carte des burgers en utilisant la route /.
    Il peut ajouter de nouveaux burgers en utilisant la route /add.
    Il peut également supprimer des burgers existants en utilisant la route /delete/:burgerId.
    Pour modifier un burger existant, il utilise la route /edit/:burgerId.
