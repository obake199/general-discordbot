<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CustomCommand;
use Exception;

class CommandController extends Controller
{
    public function registerCommand(Request $request): string
    {
        // Check if command exists
        $command = CustomCommand::where('command', $request->name)->first();
        if (!$command) {
            try {
                CustomCommand::create([
                    'command' => $request->name,
                    'value' => $request->value
                ]);
            } catch (Exception $e) {
                return "{$e->getMessage()}";
            }
        }
        else {
            return " {$request->name} command already exists.";
        }

        return "{$request->name} command created successfully";
    }

    public function fetchCommand(Request $request): string
    {
        $command = CustomCommand::where('command', $request->name)->first();
        return $command->value ?? 'Command not found';
    }

    public function removeCommand(Request $request): string
    {
        CustomCommand::where('command', $request->name)->delete();
        return "{$request->name} command deleted successfully";
    }

    public function listCommand(): string
    {
        $commands = array();
        $fetch_commands = CustomCommand::select('command')->get()->toArray();

        foreach ($fetch_commands as $command)
            $commands[] = $command['command'];

        return $commands ? implode(', ', $commands) : 'No commands available.';
    }
}
