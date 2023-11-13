export type Item = {
    category: Category
    sprites: Sprites
    effect_entries: Effect
}

export type Category = {
    name: string
}

export type Sprites = {
    default: string
}

export type Effect = {
    effect: string
    short_effect: string
}