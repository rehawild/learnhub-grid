# LearnHub Tool Standardization Guide

This guide outlines the standard patterns for creating new educational tools in the LearnHub Grid application to ensure visual consistency, dark mode compatibility, and a uniform user experience.

## 1. Page Structure
All tool pages should follow this single-column, centered layout structure.

```tsx
const ToolName = () => {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Standard Container: max-w-2xl for focus */}
            <div className="container max-w-2xl mx-auto px-4 py-8">
                
                {/* 1. Navigation Header */}
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        {/* Tool Icon & Name */}
                        🏷️ Tool Name
                    </h1>
                    <p className="text-muted-foreground">
                        {/* Short tagline */}
                        Brief description of what the tool does
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {/* Conditional rendering based on state.mode */}
                {state.mode === 'start' && <StartComponent />}
                {state.mode === 'active' && <ActiveComponent />}
                
            </div>
        </div>
    );
};
```

## 2. Color System
**Do not** use specific color scales (e.g., `text-lime-600`, `bg-rose-50`) for UI chrome.
**Do** use semantic system colors to ensure proper contrast in both light and dark modes.

| Concept | Class Name | Description |
|:---|:---|:---|
| **Primary Action** | `bg-primary text-primary-foreground` | Main buttons, active states. |
| **Secondary/Muted** | `bg-secondary text-secondary-foreground` | Tags, secondary buttons. |
| **Text (Body)** | `text-foreground` | Standard readable text. |
| **Text (Muted)** | `text-muted-foreground` | Subtitles, labels, hints. |
| **Borders** | `border-border` or `border-input` | Card borders, dividers. |
| **Hover States** | `hover:text-primary hover:bg-primary/5` | Interactive cards or items. |

### Bad Example ❌
```tsx
<Card className="border-lime-100 hover:border-lime-500">
    <h3 className="text-lime-700">Topic</h3>
    <Button className="bg-lime-600 text-white">Start</Button>
</Card>
```

### Good Example ✅
```tsx
<Card className="hover:border-primary">
    <h3 className="text-primary">Topic</h3>
    <Button>Start</Button> {/* Defaults to primary */}
</Card>
```

## 3. Interactive Component Patterns

### Selection Cards (Grids)
When displaying a grid of options (decks, stories, articles):
- Use `grid-cols-1 md:grid-cols-2`.
- Use `Card` with `hover:border-primary` and `hover:shadow-md`.
- Ensure the whole card is clickable or has a clear primary action.

```tsx
<Card className="cursor-pointer hover:border-primary transition-all group" onClick={select}>
    <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
            {item.title}
        </CardTitle>
    </CardHeader>
</Card>
```

### Quiz/Input Components
- **Question Text**: `text-2xl leading-snug` inside a `Card`.
- **Options**: Vertical stack of `Button` components.
    - Default state: `variant="outline"`
    - Hover state: `hover:border-primary hover:text-primary hover:bg-primary/5`
    - Selected/Correct state: `bg-green-600` (Success states are the only exception where specific colors like green/red are acceptable for feedback).
- **Explanation**: `bg-muted` container with `text-muted-foreground`.

### Completion Screens
- **Icon**: `text-primary` inside `bg-primary/10` rounded container.
- **Score**: Large text `text-5xl font-bold text-primary`.
- **Actions**: "Restart" (Default Button) and "Back" (Outline Button).

## 4. Typography
- **Headings**: `font-bold` (sans-serif default). Avoid forcing `font-serif` unless it's a specific stylistic choice for *content* (e.g., a poem body), not UI.
- **Body Text**: `text-lg leading-relaxed` for reading content.

## 5. Icons
- Use `lucide-react` icons.
- Standard size for inline icons: `w-4 h-4`.
- Feature icons: `w-12 h-12` in completion screens.

---
*Follow these standards to maintain a cohesive "LearnHub" feel across all tools.*
