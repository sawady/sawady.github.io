import { writable } from 'svelte/store';

export const productos = writable({
    total: 22,
    page: 1,
    count: 20,
    last_page: 2,
    items: [
        {
            id: 21,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Higienol 30mts",
            codigo: "D2P6",
            hayStock: true,
            distribuidora_id: 3,
            precio: "31.98"
        },
        {
            id: 18,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Fanta 1.5lt",
            codigo: "D2P5",
            hayStock: true,
            distribuidora_id: 3,
            precio: "94.78"
        },
        {
            id: 15,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Sprite 2lt",
            codigo: "D2P4",
            hayStock: true,
            distribuidora_id: 3,
            precio: "74.90"
        },
        {
            id: 12,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Yerba Marolio",
            codigo: "D2P3",
            hayStock: true,
            distribuidora_id: 3,
            precio: "91.14"
        },
        {
            id: 9,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Yerba Playadito",
            codigo: "D2P2",
            hayStock: true,
            distribuidora_id: 3,
            precio: "40.00"
        },
        {
            id: 6,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Azucar Ledesma",
            codigo: "D2P1",
            hayStock: true,
            distribuidora_id: 3,
            precio: "63.74"
        },
        {
            id: 3,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Coca cola 2lt",
            codigo: "D2P0",
            hayStock: true,
            distribuidora_id: 3,
            precio: "71.63"
        },
        {
            id: 20,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Higienol 30mts",
            codigo: "D1P6",
            hayStock: true,
            distribuidora_id: 2,
            precio: "62.36"
        },
        {
            id: 17,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Fanta 1.5lt",
            codigo: "D1P5",
            hayStock: true,
            distribuidora_id: 2,
            precio: "77.55"
        },
        {
            id: 14,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Sprite 2lt",
            codigo: "D1P4",
            hayStock: true,
            distribuidora_id: 2,
            precio: "34.24"
        },
        {
            id: 11,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Yerba Marolio",
            codigo: "D1P3",
            hayStock: true,
            distribuidora_id: 2,
            precio: "39.36"
        },
        {
            id: 8,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Yerba Playadito",
            codigo: "D1P2",
            hayStock: true,
            distribuidora_id: 2,
            precio: "100.43"
        },
        {
            id: 5,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Azucar Ledesma",
            codigo: "D1P1",
            hayStock: true,
            distribuidora_id: 2,
            precio: "91.61"
        },
        {
            id: 2,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Coca cola 2lt",
            codigo: "D1P0",
            hayStock: true,
            distribuidora_id: 2,
            precio: "84.31"
        },
        {
            id: 19,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Higienol 30mts",
            codigo: "D0P6",
            hayStock: true,
            distribuidora_id: 1,
            precio: "91.68"
        },
        {
            id: 16,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Fanta 1.5lt",
            codigo: "D0P5",
            hayStock: true,
            distribuidora_id: 1,
            precio: "47.88"
        },
        {
            id: 13,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Sprite 2lt",
            codigo: "D0P4",
            hayStock: true,
            distribuidora_id: 1,
            precio: "90.26"
        },
        {
            id: 10,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Yerba Marolio",
            codigo: "D0P3",
            hayStock: true,
            distribuidora_id: 1,
            precio: "64.82"
        },
        {
            id: 7,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Yerba Playadito",
            codigo: "D0P2",
            hayStock: true,
            distribuidora_id: 1,
            precio: "77.33"
        },
        {
            id: 4,
            created_at: "2020-06-22T23:58:49.000000Z",
            updated_at: "2020-06-22T23:58:49.000000Z",
            deleted_at: null,
            nombre: "Azucar Ledesma",
            codigo: "D0P1",
            hayStock: true,
            distribuidora_id: 1,
            precio: "70.66"
        }
    ]
});