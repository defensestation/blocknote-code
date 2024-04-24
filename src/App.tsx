import "./App.css";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, SuggestionMenuController, getDefaultReactSlashMenuItems, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems } from "@blocknote/core";
import { CodeBlock, insertCode } from "../lib/CodeBlock";


const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    procode: CodeBlock,
  },
});


const App = (props: React.PropsWithChildren) => {
  const editor = useCreateBlockNote({
    schema: schema,
  });

  return (
    <div style={{height: "100vh", width: "100vw", background: "#ffffff", padding:"20px"}}>
    <BlockNoteView
      // onChange={() => console.log(editor.document)}
      theme={"light"}
      // editable={false}
      editor={editor}
      slashMenu={false}
    >
      {/* @ts-ignore */}
      <SuggestionMenuController
        triggerCharacter={"/"}
        getItems={async (query) =>
          // Gets all default slash menu items and `insertAlert` item.
          filterSuggestionItems(
            [...getDefaultReactSlashMenuItems(editor), insertCode()],
            query
          )
        }
      />
    </BlockNoteView>
    </div>
  );
};


export default App