import * as React from 'react';
import * as PropTypes from 'prop-types';

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = sofaPrint
declare module sofaPrint {

  export function PageBreak(): React.ReactElement<any>;

  export class PrintPage extends React.Component<PrintPage.PrintPageProps> {
    static propTypes: {
      previewStyle: PropTypes.Requireable<boolean>,
      pageWidth: PropTypes.Requireable<number>,
      goBack: PropTypes.Requireable<PrintPage.PrintCallbackFn>,
      showGoBackButton: PropTypes.Requireable<boolean>,
    };
    static defaultProps: Partial<PrintPage.PrintPageProps>;
    private componentRef;

    printMethod(): () => void;
    handlePrint(): () => void;
    handleGoBack(): () => void;
    render(): React.ReactElement<any>;
  }

  namespace PrintPage {
    type PrintCallbackFn = () => void;

    export interface PrintPageProps {
      previewStyle: boolean,
      pageWidth: number,
      goBack: PrintCallbackFn,
      showGoBackButton: boolean,
    }
  }
}
