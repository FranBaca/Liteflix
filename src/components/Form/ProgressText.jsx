import React from "react"
import { Text } from "@chakra-ui/react";
  const ProgressText = (label, color, align, top, bottom) => (
    <Text
      color={color ?? '#fff'}
      textAlign={align}
      fontSize='18px'
      fontWeight='normal'
      mb={bottom}
      mt={top}
      lineHeight='16px'
      letterSpacing='4px'
    >
      {label}
    </Text>
  );

  export default ProgressText;