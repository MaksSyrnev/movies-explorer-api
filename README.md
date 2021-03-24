# movies-explorer-api
# REST

реализован следующий функционал  

# возвращает информацию о пользователе (email и имя)
GET /users/me

# обновляет информацию о пользователе (email и имя)
PATCH /users/me

# возвращает все сохранённые пользователем фильмы
GET /movies

# создаёт фильм с переданными в теле
# country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail 
# * пока необходимо добавлять еще movieId
POST /movies

# удаляет сохранённый фильм по _id
DELETE /movies/movieId 

демо можно посмотреть по 
http://api.onemoredog.space/
