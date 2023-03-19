const WINDOWS_LINK: string =
  "https://github.com/clementreiffers/dns-server/releases/download/refs%2Fheads%2Fmain/AsgarDNS-Windows-v16.exe";

const LINUX_LINK: string =
  "https://github.com/clementreiffers/dns-server/releases/download/refs%2Fheads%2Fmain/AsgarDNS-Ubuntu-v16";

const MACOS_LINK: string =
  "https://github.com/clementreiffers/dns-server/releases/download/refs%2Fheads%2Fmain/AsgarDNS-MacOS-v16";

const ROUTES: { readonly homepage: string; readonly aboutus: string } = {
  homepage: "/asgardns-website-react",
  aboutus: "/about-us",
};

export { WINDOWS_LINK, LINUX_LINK, MACOS_LINK, ROUTES };
