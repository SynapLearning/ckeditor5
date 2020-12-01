/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creators to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import BalloonEditorBase from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import MathType from '@wiris/mathtype-ckeditor5/src/plugin';
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';

class ClassicEditor extends ClassicEditorBase {}
class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
const plugins = [
	Essentials,
	Alignment,
	Autoformat,
	Bold,
	Italic,
	Subscript,
	Superscript,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MathType,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	UploadAdapter,
	HtmlEmbed,
	LinkImage
];

ClassicEditor.builtinPlugins = plugins;
BalloonEditor.builtinPlugins = plugins;

// Editor configuration.
const config = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"link",
			"bulletedList",
			"numberedList",
			"|",
			"indent",
			"outdent",
			"|",
			"imageUpload",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"undo",
			"redo",
		],
	},
	image: {
		toolbar: [
			'imageTextAlternative',
            '|',
            'imageStyle:alignLeft',
            'imageStyle:full',
            'imageStyle:alignRight',
			'|',
            'linkImage'
		],
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
	},
	htmlEmbed: {
		showPreviews: true
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};

ClassicEditor.defaultConfig = config;
BalloonEditor.defaultConfig = config;

export default {
	ClassicEditor,
	BalloonEditor,
};
