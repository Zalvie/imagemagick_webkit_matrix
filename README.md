Push out webkit-filter matrixes for imagemagick or what ever.

    'convert -color-matrix ' + rsf._(rsf.GetHueRotateMatrix(188)) + ' -color-matrix ' + rsf._(rsf.GetSaturateMatrix(156 / 100)) + ' in.png out.png'
