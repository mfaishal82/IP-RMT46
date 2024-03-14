# IP-RMT46

# API DOCS

## Rest API Endpoints

List of available endpoints:

    
    GET /pub
    GET /pub/:id

    POST /register
    POST /login

    GET /contents
    POST /contents
    PUT /contents/:id
    DELETE /contents/:id

    GET /categories
    GET /categories/:id
    POST /categories
    PUT /categories/:id
    DELETE /categories/:id
    
## GET /pub

Get public data.

_Response (200 - OK)_

    {
        data: [
            {
                id: string,
                title: string,
                translations: [Array]
            },
            ...,
        ],
        "meta": 
            {
            "current_page": "1",
            "last_page": 35,
            "total_items": 697,
            "per_page": 20
            }
    }
    
## GET /pub/:id
Get specific public data by Id.

- Request Params:

    ```
    {
        id: integer
    }
    ```

_Response (200-OK)_

    
    {
        id: integer,
        title: string,
        hadeeth: text,
        attribution: string,
        grade: string,
        explanation: text,
        hints: [Array],
        categories: [Array],
        translations: [Array]
    }

## POST /register

## POST /login

## GET /contents

## GET /contents/:id

## POST /contents

## PUT /contents/:id

## DELETE /contents/:id

## GET /categories

## GET /categories/:id

## POST /categories

## PUT /categories/:id

## DELETE /categories/:id