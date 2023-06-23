export interface EditorState {
	photos: Array<string>;
	questions: Array<string>;
	answers?: Array<string>;
    colors: Array<string>;
	signature: string;
	createdOn: Date;
	createdBy: string | undefined;
}
