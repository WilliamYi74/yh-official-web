import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import Daisyui from 'daisyui'
export default <Partial<Config>>{
    plugins: [Daisyui],
    theme: {
        extend: {
            colors: {
                // @ts-ignore
                primary: defaultTheme.colors!.green
            }
        }
    }
}
