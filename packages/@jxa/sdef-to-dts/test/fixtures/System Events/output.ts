
export namespace SystemEvents {
    // Records

    // Function options








    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MoveOptionalParameter {
      /**
       * The new location for the disk item(s).
       */
      to: any;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface RestartOptionalParameter {
      /**
       * Is the user defined state saving preference followed?
       */
      stateSavingPreference?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ShutDownOptionalParameter {
      /**
       * Is the user defined state saving preference followed?
       */
      stateSavingPreference?: boolean;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ClickOptionalParameter {
      /**
       * when sent to a "process" object, the { x, y } location at which to click, in global coordinates
       */
      at?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface KeyCodeOptionalParameter {
      /**
       * modifiers with which the key codes are to be entered
       */
      using?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface KeystrokeOptionalParameter {
      /**
       * modifiers with which the keystrokes are to be entered
       */
      using?: any;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface AttachActionToOptionalParameter {
      /**
       * a file containing the script to attach
       */
      using: string;
    }





    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DoFolderActionOptionalParameter {
      /**
       * the folder action message to process
       */
      folderActionCode: any;
      /**
       * a list of items for the folder action message to process
       */
      withItemList?: any;
      /**
       * the new window size for the folder action message to process
       */
      withWindowSize?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface EditActionOfOptionalParameter {
      /**
       * ...or the name of the action to edit
       */
      usingActionName?: string;
      /**
       * the index number of the action to edit...
       */
      usingActionNumber?: number;
    }





    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface RemoveActionFromOptionalParameter {
      /**
       * ...or the name of the action to remove
       */
      usingActionName?: string;
      /**
       * the index number of the action to remove...
       */
      usingActionNumber?: number;
    }

}
export interface SystemEvents {
    // Functions

     /**
      * Discard the results of a bounded update session with one or more files.

      * 
      */
     abortTransaction(): void

     /**
      * Begin a bounded update session with one or more files.

      * @return undefined
      */
     beginTransaction(): number

     /**
      * Apply the results of a bounded update session with one or more files.

      * 
      */
     endTransaction(): void

     /**
      * connect a configuration or service
      * @param directParameter a configuration or service
      * @return undefined
      */
     connect(directParameter: {}, ): any

     /**
      * disconnect a configuration or service
      * @param directParameter a configuration or service
      * @return undefined
      */
     disconnect(directParameter: {}, ): any

     /**
      * start the screen saver
      * @param directParameter the object for the command
      * 
      */
     start(directParameter: {}, ): void

     /**
      * stop the screen saver
      * @param directParameter the object for the command
      * 
      */
     stop(directParameter: {}, ): void

     /**
      * Delete disk item(s).
      * @param directParameter The disk item(s) to be deleted.
      * 
      */
     delete(directParameter: any, ): void

     /**
      * Move disk item(s) to a new location.
      * @param directParameter The disk item(s) to be moved.
      * @param option
      * @return undefined
      */
     move(directParameter: {}, option?: SystemEvents.MoveOptionalParameter): void

     /**
      * Open disk item(s) with the appropriate application.
      * @param directParameter The disk item(s) to be opened.
      * @return undefined
      */
     open(directParameter: {}, ): any

     /**
      * Log out the current user

      * 
      */
     logOut(): void

     /**
      * Restart the computer

      * @param option
      * 
      */
     restart(option?: SystemEvents.RestartOptionalParameter): void

     /**
      * Shut Down the computer

      * @param option
      * 
      */
     shutDown(option?: SystemEvents.ShutDownOptionalParameter): void

     /**
      * Put the computer to sleep

      * 
      */
     sleep(): void

     /**
      * cause the target process to behave as if the UI element were clicked
      * @param directParameter The UI element to be clicked.
      * @param option
      * @return undefined
      */
     click(directParameter?: any, option?: SystemEvents.ClickOptionalParameter): void

     /**
      * cause the target process to behave as if key codes were entered
      * @param directParameter The key code(s) to be sent. May be a list.
      * @param option
      * 
      */
     keyCode(directParameter: {}, option?: SystemEvents.KeyCodeOptionalParameter): void

     /**
      * cause the target process to behave as if keystrokes were entered
      * @param directParameter The keystrokes to be sent.
      * @param option
      * 
      */
     keystroke(directParameter: string, option?: SystemEvents.KeystrokeOptionalParameter): void

     /**
      * cause the target process to behave as if the action were applied to its UI element
      * @param directParameter The action to be performed.
      * @return undefined
      */
     perform(directParameter: any, ): any

     /**
      * set the selected property of the UI element
      * @param directParameter The UI element to be selected.
      * @return undefined
      */
     select(directParameter: any, ): any

     /**
      * Attach an action to a folder
      * @param directParameter the object for the command
      * @param option
      * @return undefined
      */
     attachActionTo(directParameter: any, option?: SystemEvents.AttachActionToOptionalParameter): any

     /**
      * List the actions attached to a folder
      * @param directParameter the object for the command
      * @return undefined
      */
     attachedScripts(directParameter: any, ): void

     /**
      * cause the target process to behave as if the UI element were cancelled
      * @param directParameter the object for the command
      * @return undefined
      */
     cancel(directParameter: any, ): any

     /**
      * cause the target process to behave as if the UI element were confirmed
      * @param directParameter the object for the command
      * @return undefined
      */
     confirm(directParameter: any, ): any

     /**
      * cause the target process to behave as if the UI element were decremented
      * @param directParameter the object for the command
      * @return undefined
      */
     decrement(directParameter: any, ): any

     /**
      * Send a folder action code to a folder action script
      * @param directParameter the object for the command
      * @param option
      * 
      */
     doFolderAction(directParameter: any, option?: SystemEvents.DoFolderActionOptionalParameter): void

     /**
      * Execute an OSA script.
      * @param directParameter the object for the command
      * @return undefined
      */
     doScript(directParameter: {}, ): any

     /**
      * Edit an action of a folder
      * @param directParameter the object for the command
      * @param option
      * @return undefined
      */
     editActionOf(directParameter: any, option?: SystemEvents.EditActionOfOptionalParameter): any

     /**
      * cause the target process to behave as if the UI element were incremented
      * @param directParameter the object for the command
      * @return undefined
      */
     increment(directParameter: any, ): any

     /**
      * cause the target process to behave as if keys were held down
      * @param directParameter the object for the command
      * 
      */
     keyDown(directParameter: any, ): void

     /**
      * cause the target process to behave as if keys were released
      * @param directParameter the object for the command
      * 
      */
     keyUp(directParameter: any, ): void

     /**
      * cause the target process to behave as if the UI element were picked
      * @param directParameter the object for the command
      * @return undefined
      */
     pick(directParameter: any, ): any

     /**
      * Remove a folder action from a folder
      * @param directParameter the object for the command
      * @param option
      * @return undefined
      */
     removeActionFrom(directParameter: any, option?: SystemEvents.RemoveActionFromOptionalParameter): any
}
