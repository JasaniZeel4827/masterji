
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'SF Pro Display',
					'SF Pro Text',
					'system-ui',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif'
				],
				display: [
					'SF Pro Display',
					'-apple-system',
					'BlinkMacSystemFont',
					'system-ui',
					'sans-serif'
				],
				text: [
					'SF Pro Text',
					'-apple-system',
					'BlinkMacSystemFont',
					'system-ui',
					'sans-serif'
				]
			},
			fontSize: {
				'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
				'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
				'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
				'headline-lg': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
				'headline-md': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
				'headline-sm': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
				'title-lg': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
				'title-md': ['1.125rem', { lineHeight: '1.45', letterSpacing: '-0.005em' }],
				'body-lg': ['1rem', { lineHeight: '1.6' }],
				'body-md': ['0.875rem', { lineHeight: '1.65' }],
				'body-sm': ['0.75rem', { lineHeight: '1.7' }],
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'34': '8.5rem',
				'88': '22rem',
				'92': '23rem',
				'96': '24rem',
				'100': '25rem',
				'104': '26rem',
				'108': '27rem',
				'112': '28rem',
				'116': '29rem',
				'120': '30rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					50: '#fff7f5',
					100: '#ffede8',
					200: '#ffdbd2',
					300: '#ffbfae',
					400: '#ff9782',
					500: '#FF6B47',
					600: '#e55a3d',
					700: '#d4493a',
					800: '#b13d33',
					900: '#92332c',
					950: '#501a16'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
				'4xl': '2rem'
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
				'brand': '0 10px 25px -3px rgba(255, 107, 71, 0.25)',
				'brand-lg': '0 20px 40px -12px rgba(255, 107, 71, 0.3)',
			},
			backdropBlur: {
				'xs': '2px',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.8s ease-out',
				'scale-in': 'scaleIn 0.5s ease-out',
				'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
				'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				bounceGentle: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				pulseGentle: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
