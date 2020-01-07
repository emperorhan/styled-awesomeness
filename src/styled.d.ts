import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        // borderRadius: string;

        colors: {
            mainColor: "#3498db";
            dangerColor: "#e74c3c";
            successColor: "#2ecc71";
        };
    }
}