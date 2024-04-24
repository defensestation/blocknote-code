import "@blocknote/core/style.css";
import {
  BasicTextStyleButton,
  ColorStyleButton,
  CreateLinkButton,
  FormattingToolbar,
  FormattingToolbarController,
  ImageCaptionButton,
  NestBlockButton,
  ReplaceImageButton,
  TextAlignButton,
  UnnestBlockButton,
  useEditorSelectionChange,
  useBlockNoteEditor,
} from "@blocknote/react";
import { BlockSchema, InlineContentSchema, StyleSchema } from "@blocknote/core";
import { useState } from "react";
import { CreateCommentButton } from "../lib/components/CommentToolbar/ToolbarButton/CreateCommentButton";
import { CommentContextType } from "../lib/types/context";
// import { CustomBlockTypeDropdown } from "./CustomBlockTypeDropDown";

// Code modified from `DefaultFormattingToolbar.tsx` in @blocknote/react
export const CustomFormattingToolbar = (props: {commentContext: CommentContextType}) => {
  const editor = useBlockNoteEditor<
    BlockSchema,
    InlineContentSchema,
    StyleSchema
  >();
  const [isVisible, setVisible] = useState(false);
  useEditorSelectionChange(() => {
    const selection = editor.getSelection();

    // Get the blocks in the current selection and store on the state. If
    // the selection is empty, store the block containing the text cursor
    // instead.
    let blocks = [];
    if (selection !== undefined) {
      blocks = selection.blocks;
    } else {
      blocks = [editor.getTextCursorPosition().block];
    }
    const isTrue = blocks.some(
      (block) =>
        block.type !== "mermaid" &&
        block.type !== "role" &&
        block.type !== "control" &&
        block.type !== "code"
    );
    setVisible(isTrue);
  }, editor);
  return isVisible ? (
    <FormattingToolbarController
      formattingToolbar={() => (
        <FormattingToolbar>
          {/* <BlockTypeDropdown key={"blockTypeDropdown"} items={} /> */}
          {/* <CustomBlockTypeDropdown editor={editor}  /> */}
          <ImageCaptionButton key={"imageCaptionButton"} />
          <ReplaceImageButton key={"replaceImageButton"} />

          <BasicTextStyleButton
            basicTextStyle={"bold"}
            key={"boldStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"italic"}
            key={"italicStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"underline"}
            key={"underlineStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"strike"}
            key={"strikeStyleButton"}
          />
          {/* Extra button to toggle code styles */}
          <BasicTextStyleButton
            key={"codeStyleButton"}
            basicTextStyle={"code"}
          />

          <TextAlignButton textAlignment={"left"} key={"textAlignLeftButton"} />
          <TextAlignButton
            textAlignment={"center"}
            key={"textAlignCenterButton"}
          />
          <TextAlignButton
            textAlignment={"right"}
            key={"textAlignRightButton"}
          />
          <ColorStyleButton key={"colorStyleButton"} />

          <NestBlockButton key={"nestBlockButton"} />
          <UnnestBlockButton key={"unnestBlockButton"} />

          <CreateLinkButton key={"createLinkButton"} />
          <CreateCommentButton commentContext={props.commentContext} />
        </FormattingToolbar>
      )}
    />
  ) : null;
};
