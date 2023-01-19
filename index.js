#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const pipelineUpload = require('./pipeline-upload')

program
    .name('push-cli')
    .description('CLI to handle basic commands regarding push')
    .version('0.0.1')
    .option('-d, --dry', 'output the calls to STDOUT instead of sending them');

program.command('pipeline-upload')
    .description('Upload the pipeline defined in the current working directory')
    .argument('<host>', 'hostname of API')
    .argument('<token>', 'access token')
    .action((host, token, _, cmd) => {
        pipelineUpload(host, token, cmd.optsWithGlobals().dry === true)
    });

program.parse();