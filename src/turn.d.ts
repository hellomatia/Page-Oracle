// turn.d.ts
declare module 'turn.js' {
    import * as $ from 'jquery';

    interface TurnOptions {
        width?: number;
        height?: number;
        autoCenter?: boolean;
    }

    interface Turn {
        turn(method: 'page', page: number): this;
        turn(options: TurnOptions): this;
    }

    interface JQuery {
        turn(options?: TurnOptions): Turn;
    }

    export default $;
}
