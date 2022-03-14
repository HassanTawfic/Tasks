<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>My XSL</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Company Name</th>
      <th style="text-align:left">Full Name</th>
<th style="text-align:left">Mobile</th>
<th style="text-align:left">Home</th>
<th style="text-align:left">Work</th>
<th style="text-align:left">Address</th>
<th style="text-align:left">Other Address</th>
<th style="text-align:left">email</th>
    </tr>
    <xsl:for-each select="company/employee">
    <tr>
      <td><xsl:value-of select="companyName"/></td>
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="phones/phoneMobile"/></td>
<td><xsl:value-of select="phones/phoneHome"/></td>
<td><xsl:value-of select="phones/phoneWork"/></td>
<td><xsl:value-of select="addresses/address1"/></td>
<td><xsl:value-of select="addresses/address2"/></td>
<td><xsl:value-of select="email"/></td>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
