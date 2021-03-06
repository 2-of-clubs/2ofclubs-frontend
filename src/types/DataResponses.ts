export type StatusResponse = {
    data: {
        code: number,
        message: string,
        data: {
        }
    }
};

export type DataResponse = {
    code: number,
    message: string,
    data: {}
};

export type LoginResponse = {
    data: {
        code: number,
        message: string,
        data: {
            token: string
        }
    }
};

export type User = {
    id: number,
    username: string
};

export type Club = {
    id: number,
    name: string,
    email: string,
    bio: string,
    size: number,
    logo: string,
    tags: string[],
    hosts: string[]
};

export type tag = {
    id: number,
    name: string,
    isActive: boolean
};

export type eventGET = {
    id: number,
    name: string,
    description: string,
    datetime: string,
    location: string,
    fee: number
};

export type eventPOST = {
    name: string,
    description: string,
    location: string,
    fee: number
};