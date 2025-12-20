export const ContactModule = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/efvvs',
      social: 'github',
      color: '#333',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: '微信读书',
      // url: 'https://twitter.com/efvv',
      social: 'wechat',
      color: '#07c160',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5c3-2 6-2 9 0v14c-3-2-6-2-9 0z" />
          <path d="M13 5c3-2 6-2 9 0v14c-3-2-6-2-9 0z" />
          <line x1="13" y1="5" x2="13" y2="19" />
        </svg>
      ),
    },
    {
      name: '微信公众号搜“文疯来袭”',
      // url: 'https://discord.com/users/efvv',
      social: 'wechat-official',
      color: '#0088cc',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 7a7 7 0 0 1 7-4h2a7 7 0 0 1 7 7 7 7 0 0 1-7 7H9l-4 3v-3a7 7 0 0 1-1-10z" />
          <circle cx="10" cy="10" r="1" />
          <circle cx="14" cy="10" r="1" />
        </svg>
      ),
    },
    {
      name: 'bilibili',
      url: 'https://space.bilibili.com/438071892?spm_id_from=333.1387.0.0',
      social: 'instagram',
      color: '#E4405F',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="6" width="16" height="12" rx="2" ry="2" />
          <line x1="9" y1="6" x2="7" y2="3" />
          <line x1="15" y1="6" x2="17" y2="3" />
          <line x1="9" y1="11" x2="11" y2="11" />
          <line x1="13" y1="11" x2="15" y2="11" />
        </svg>
      ),
    },
      
  ];

  return (
    <footer className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <style scoped>{`
        .example-2 {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .example-2 li {
          list-style: none;
        }
        
        .example-2 li::after {
          content: "";
          display: block;
          height: 0px;
          transition: height 0.3s ease-in-out;
          pointer-events: none;
        }
        
        .example-2 li:hover::after {
          height: 10px;
        }
        
        .example-2 .icon-content {
          margin: 0 10px;
          position: relative;
        }
        
        .example-2 .icon-content .tooltis {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          padding: 6px 10px;
          border-radius: 5px;
          opacity: 0;
          pointer-events: none;
          visibility: hidden;
          font-size: 14px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .example-2 .icon-content:hover .tooltis {
          opacity: 1;
          visibility: visible;
          bottom: -40px;
        }
        
        .example-2 .icon-content a {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: #4d4d4d;
          background-color: #fff;
          transition: all 0.3s ease-in-out;
        }
        
        .example-2 .icon-content a:hover {
          box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
        }
        
        .example-2 .icon-content a svg {
          position: relative;
          z-index: 1;
          width: 30px;
          height: 30px;
        }
        
        .example-2 .icon-content a:hover {
          color: white;
        }
        
        .example-2 .icon-content a .filled {
          position: absolute;
          top: auto;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background-color: #000;
          transition: all 0.3s ease-in-out;
        }
        
        .example-2 .icon-content a:hover .filled {
          height: 100%;
        }
        
        .example-2 .icon-content a[data-social="github"] .filled {
          background-color: #333;
        }
        
        .example-2 .icon-content a[data-social="wechat"] .filled {
          background-color: #07c160;
        }
        
        .example-2 .icon-content a[data-social="wechat-official"] .filled {
          background-color: #0088cc;
        }
        
        .example-2 .icon-content a[data-social="instagram"] .filled {
          background-color: #E4405F;
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        {/* Dashed line above */}
        <div className="border-t border-dashed border-gray-300 mb-12"></div>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Name text */}
          <p className="text-gray-400 text-base md:text-lg font-serif">
            efvv-文疯来袭
          </p>

          {/* Social icons */}
          <ul className="example-2">
            {socialLinks.map((social) => (
              <li key={social.name} className="icon-content">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social={social.social}
                  aria-label={social.name}
                >
                  <span className="filled" style={{ backgroundColor: social.color }}></span>
                  {social.icon}
                </a>
                <span className="tooltis" style={{ backgroundColor: social.color }}>
                  {social.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

