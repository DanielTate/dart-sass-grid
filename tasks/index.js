const ox = require('@oxidental/ox')
const scss = require('@oxidental/ox-task-scss')

const cwd = process.cwd()

ox._add(scss)

ox.scss({
    watch: `${cwd}/src/grid.scss`,
    options: {
        files: [
            {
                file: 'src/grid.scss',
                outFile: 'build/grid.css'
            }
        ]
    }
})
