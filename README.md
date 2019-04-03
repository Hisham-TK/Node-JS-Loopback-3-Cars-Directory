# Cars Directory
# This is regarding the assessment task for "Node JS developer" vacancy at Tarbeeta Technologies.

You are required to build a REST API using Node JS for a a car directory, where I can do the following:

- As a superadmin, I can add new brand/model/car (ex: new model in BWM, or even add BMW if it's not added yet)
- As a super admin, I can edit existing brand/model/car specs
- As a user and/or admin, I can retrieve all cars, brands and models
- As a user I can search cars, brands and/or models by name

N.B
- You can use postman to simulate the API
- You should create a repository on GitLab and invite me as a developer
- You're required to use passport JS for authentication and role-based authorization
- You're required to use MySQL as the database

Additional N.B
- There are some cases where you will need the brand > model > name structure (ex: "Mercedes > C-Class > C180")
- I don't need any pages, you're supposed to use postman to test your endpoints. So there's no redirection.
- No one should be able to use any endpoints in your API unless he provides a token in the authorization header (except for login and register endpoints).


# My Results
- Users have isAdmin and isSuperAdmin properties for Authentication
- You can register as (User, Admin, SuperAdmin) by POST method.
 then to generate the token users/login
- To log out users/login
- SuperAdmin, as you asked, will be the only one can Add or Edit in Brands/Models/Cars
- only required for post "Create" new (brands, models, cars) [name],[modelId for Cars, brandId for Models] else is optional.
- You can get all Models that this brand contains brands/{id}/models
- You can get all Models that this brand contains models/{id}/cars
- You can search by name if you are authorized /[brands, models, cars]/searchByName
- all error for Authorization and Authentication and Database will not stop the server from running it just unhandled
