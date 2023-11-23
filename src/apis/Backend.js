export default class Backend {
    baseUrl = "http://127.0.0.1:8000";

    /*
        Route::post('/api/client/create', [ClientController::class, 'create']);
        Route::get('/api/client/get-all', [ClientController::class, 'get_all']);
        Route::get('/api/client/get/{id}', [ClientController::class, 'get']);
        Route::post('/api/client/update', [ClientController::class, 'update']);
        Route::get('/api/client/get-all-data', [ClientController::class, 'get_all_data']);
        Route::get('/api/client/delete/{id}', [ClientController::class, 'delete']);
    */

    route(endpoint) {
        return this.baseUrl + endpoint;
    }

    async clientCreate(formData) {
        await fetch(route("/api/client/create"), {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }
}
